import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'; // Import the icons

import '../css/footer.css';
import footerlogo from '../assets/offer1.jpg';

function Footer() {
  return (
   <>
    <Footer>
      <div className='row-one'>
   
        <div className='logo-col'>
           <img src=''></img>
        </div>
        <div className='contact-col'>
          <h3>Contact Us</h3>
          <h4>market@gmail.com</h4>
          <h4>No.45 Maradana Col-10</h4>
          <h4>0112456789</h4>
        </div>
        <div className='social-col'>
          <h3>Follow Us</h3>
          <div className='social-links'>
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <AiFillInstagram/>
          </div>
        </div>
      </div>
      <div className='row-two'>
        @ All Rights Reserved
      </div>
    </Footer>
   </>
    
  );
}

export default Footer;
