import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"
import menu_open from '../../assets/menu_open.svg'
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();
  const openMenu = ()=> {
    menuRef.current.style.right='0';
  }
  const closeMenu = ()=> {
    menuRef.current.style.right='-350px';
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
      <ul className='nav-menu' ref={menuRef}>
        <img src={menu_close} alt="" className="nav-mob-close"  onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>{setMenu('home')}}>Home</p>{menu==='home'?<img src={underline} alt="" />:<></>} </AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#about' offset={50}><p onClick={()=>{setMenu('about')}}>About Me</p>{menu==='about'?<img src={underline} alt="" />:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#services' offset={50}><p onClick={()=>{setMenu('services')}}>Services</p>{menu==='services'?<img src={underline} alt="" />:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#work' offset={50}><p onClick={()=>{setMenu('work')}}>Portfolio</p>{menu==='work'?<img src={underline} alt="" />:<></>}</AnchorLink></li>
        <li><AnchorLink className='anchor-link' href='#contact' offset={50}><p onClick={()=>{setMenu('contact')}}>Contact</p>{menu==='contact'?<img src={underline} alt="" />:<></>}</AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' href='#contact' offset={50}>
        Connect with Me </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
