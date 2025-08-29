import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg';
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6293ecf9-ce14-4682-9a3e-25363cee37fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
 
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact.</p>
          <div className="contact-details">
            <div className="contact-detail">
            <img src={mail_icon} alt="" /><p>klamudinm35@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>9546335307</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>mirganj, gopalganj, bihar</p>  
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' id='name' />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' id='email'/>
          <label htmlFor="message">Write your message here</label>
          <textarea  placeholder='Enter your message' name='message' id='textarea'/>
          <button type='submit' className='contact-submit'>Submit now</button>
           <span>{result}</span>  
        </form>
      </div>
      
    </div>
  )
}

export default Contact
