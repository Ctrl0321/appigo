import React from 'react'
import offer1 from "../assets/offer1.svg";
import offer2 from "../assets/offer2.svg";
import offer3 from "../assets/offer3.svg";
import "../css/offer.css";

function OfferRes() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <a
          href=""
          target="_blank"
        >
         <img className='offer-image' src={offer1} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer2} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer3} />
        </a>
       
        
      </div>
      <div className="logos-slide">
        <a
          href=""
          target="_blank"
        >
         <img className='offer-image' src={offer1} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer2} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer3} />
        </a>
       
        
      </div>
      <div className="logos-slide">
        <a
          href=""
          target="_blank"
        >
         <img className='offer-image' src={offer1} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer2} />
        </a>
        <a href="https://kottulabs.appigo.co/webstore/?session=1692860297361"
          target="_blank">
        <img className='offer-image' src={offer3} />
        </a>
       
        
      </div>
      
    </div>
  )
}

export default OfferRes