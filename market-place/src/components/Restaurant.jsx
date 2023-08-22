import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import "../css/Restaurant.css";


function Restaurant(promp) {
  const [showDescription, setShowDescription] = useState(false);

  const visitStore = () => {
    // Open the store's website in a new tab/window
    window.open(promp.websiteUrl, "_blank");
  };


  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  let isDelivery=promp.isDelivery;
  return (
    <div className="card-holder">
      <div className="card-container">
        <img className="cofee" src={promp.image}></img>
        <h2>{promp.name}</h2>
        
        <div className="details">
          <div className="first">
            <div className="detail">
              <MdLocationOn />
              <p>{promp.place}</p>
            </div>
            <div className="detail">
              <BsClock />
              <p>{promp.time}</p>
            </div>
          </div>
          <div className="second">
          {isDelivery==="true"&&(<div className="detail">
            <TbTruckDelivery /> 
            <p>Delivery</p>
            </div>)}
            <div className="detail">
              
              <BsBoxSeamFill />
              <p>Pickup</p>
              
            </div>
            
          </div>
        </div>
        <button className="btn" onClick={visitStore}>Visit Store</button>

        {/* <button className='arrow' onClick={toggleDescription}>
        {showDescription ? <IoIosArrowUp size={30} /> : <IoIosArrowDown size={30} />}
      </button> */}
      </div>
      {/* {showDescription && (
        <div className={`description ${showDescription ? 'show' : 'hide'}`}>
            <h3>Address</h3>
            <p>115/88 mardana colombo 10</p>
            <h3>Sample Heading</h3>
            <p> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
</p>
          <p>Coffe and club sandwhich with chips	Unwind at our coffee haven, a fusion of flavors and literature. Sip hot and cold brews, savor signature bites, and immerse in a world of words</p>
           
        </div>
      )} */}
    </div>
  );
}

export default Restaurant;
