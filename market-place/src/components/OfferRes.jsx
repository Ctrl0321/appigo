import React from 'react'
import offer1 from "../assets/offer1 .jpg";
import offer2 from "../assets/offer2 .jpg";
import offer3 from "../assets/offer3 .jpg";
import "../css/offer.css";

function OfferRes() {
  return (
    <div className="logos">
      <div className="logos-slide">
        <a
          href="https://www.youtube.com/watch?v=nAjR0Oj0J8E&t=635s"
          target="_blank"
        >
         <img className='offer-image' src={offer1} />
        </a>
        <img className='offer-image' src={offer2} />
        <img className='offer-image' src={offer3} />
      </div>
      <div className="logos-slide">
        <a
          className="link"
          href="https://www.youtube.com/watch?v=nAjR0Oj0J8E&t=635s"
          target="_blank"
        >
          <img className='offer-image' src={offer1} />
        </a>
        <img className='offer-image' src={offer2} />
        <img className='offer-image' src={offer3} />
      </div>
      <div className="logos-slide">
        <a
          className="link"
          href="https://www.youtube.com/watch?v=nAjR0Oj0J8E&t=635s"
          target="_blank"
        >
          <img className='offer-image' src={offer1} />
        </a>
        <img className='offer-image' src={offer2} />
        <img className='offer-image' src={offer3} />
      </div>
    </div>
  )
}

export default OfferRes