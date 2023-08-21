import React from 'react'
import '../css/Home.css'
import Food from '../assets//dfa3525db959f6ca8ba684afe9e5f673.jpeg'
import Restaurant from './Restaurant'
import Coffee from '../assets/Untitled-1Artboard 1.jpg'
import OfferRes from './OfferRes'
import Footer from './footer'
function Home() {
  return (
    <>
    <div className="landing-header">
         
         <div className="wording">
            <h2 className='market-place'><span>Market</span>place<span className='dot'>{'\u2B24'}</span></h2>
            <h2 className='Discover'> DISCOVER <br/> YOUR FAVOURITE <br/>RESTAURANTS NEARBY</h2>
         </div>
         <img className="food-image" src={Food}></img>
    </div>
    
    <OfferRes/>
    <div className="restaurants">
      <h1>ALL RESTAURANTS</h1>
      <div className="rest-cards">
      <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
      <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
       <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
      <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
       <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
      <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
     <Restaurant
      image={Coffee}
      place="col-10"
      time="8.00AM - 10.00PM"
      isDelivery="true"/>
      </div>
     
    </div>
    <Footer/>
    
    </>
  )
}

export default Home