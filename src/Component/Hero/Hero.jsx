import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.jpg'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Klamuddin,</span>  Frontend developer based in india.</h1>
      <p>i am frontend developer from gopalganj, india with 2 years of experience in multiple online intership like codeshop</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' href='#contact' offset={50}>  Connect With Me.</AnchorLink>
        </div>
        <div className="hero-resume">
            My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero
