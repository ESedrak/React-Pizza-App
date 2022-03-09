import React from 'react';
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>

      <div className='leftSide'>
        <img src={require('../Images/7.png')}></img>
      </div>

      <div className='rightSide'>
        <h3>CONTACT US</h3>
        <form id="contact-form" method="post">
          <label>Full Name:</label><br />
          <input placeholder='Enter your name...' required /><br />
          <label>Email:</label><br />
          <input placeholder='Enter your email...' required /><br />
          <label>Message:</label><br />

          <textarea rows="4" cols="50" placeholder='Enter your messages...' required></textarea><br />

          <button>SEND</button>

        </form>

      </div>



    </div>
  );
}

export default Contact;