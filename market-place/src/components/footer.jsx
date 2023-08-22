import React from 'react';
import '../css/footer.css'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

function Footer() {
  const visitStore = (link) => {
    // Open the store's website in a new tab/window
    window.open(link, "_blank");
  };
  return (
   <>
    <footer>
      <div className='row-one'>
   
        <div className='logo-col'>
           <img src=''></img>
        </div>
        <div className='contact-col'>
         <div className='text-contact'>
         <h2>Contact Us</h2>
          <h4>market@gmail.com</h4>
          <h4>No.45 Maradana Col-10</h4>
          <h4>0112456789</h4>
         </div>
        </div>
        <div className='social-col'>
          <h2>Follow Us</h2>
          <div className='social-links'>
            <AiFillFacebook size={30} onClick={()=>visitStore(" https://www.facebook.com/profile.php?id=61550630937499")}/>
            {/* <AiOutlineTwitter size={30} /> */}
            <AiFillInstagram size={30}onClick={()=>visitStore("https://www.instagram.com/restohub.lk/")}/>
          </div>
        </div>
      </div>
      <div className='row-two'>
        @ All Rights Reserved
      </div>
    </footer>
   </>
    
  );
}

export default Footer;
