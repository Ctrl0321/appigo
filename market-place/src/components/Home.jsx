import {React,useState,useEffect} from 'react'
import '../css/Home.css'
import Food3 from '../assets/food3.svg'
import Food2 from '../assets/food2.svg'
import Food1 from '../assets/food1.svg'
import Food4 from '../assets/food4.png'
import Food5 from '../assets/food5.svg'
import Food6 from '../assets/food4.png'
import Restaurant from './Restaurant'
import OfferRes from './OfferRes'
import Footer from './footer'
import BreadTalk from '../assets/restaurants/breadTalk.svg'
import EnglishCake from '../assets/restaurants/englishCake.svg'
import ichiban from '../assets/restaurants/ichiban.svg'
import jackTree from '../assets/restaurants/jackTree.svg'
import kottuLabs from '../assets/restaurants/kottuLabs.svg'
import malayRes from '../assets/restaurants/malayRestaurant.svg'
import mangoTree from '../assets/restaurants/mangoTree.svg'
import pagesAndCoffee from '../assets/restaurants/pages_coffee.svg'
import potBiriyani from '../assets/restaurants/potBiriyani.svg'
import spicyMango from '../assets/restaurants/spicyMango.svg'
import thai from '../assets/restaurants/thai.svg'
import Logo from '../assets/RestoHub.svg'


const foodImages = [Food1,Food2,Food3,Food5];
const foodImages2 = [Food4,Food5,Food6];
function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image index every 3 seconds
  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
  };

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentImageIndex(nextImageIndex);
  //     setNextImageIndex((nextImageIndex + 1) % foodImages.length);
  //   }, 3000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [nextImageIndex]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <div className="landing-header">
         
         <div className="wording">
            <img className='logo-restoHub' src={Logo} alt='Logo-RestToHub'></img>
            <h2 className='Discover'> DISCOVER <br/> YOUR FAVOURITE <br/>RESTAURANTS NEARBY</h2>
         </div>
         
         {/* <img className="food-image" src={foodImages[currentImageIndex]} alt="Food" /> */}
         {/* <img
          className="food-image"
          style={{ opacity: currentImageIndex === 0 ? 1 : 0 }} 
          src={foodImages[currentImageIndex]}
          alt="Food"
        />
        <img
          className="food-image"
          style={{ opacity: currentImageIndex === 1 ? 1 : 0 }} 
          src={foodImages[currentImageIndex]}
          alt="Food"
        /> */}
         {/* <img
          className="food-image"
          src={foodImages[currentImageIndex]}
          alt="Food"
        />
        <img
          className="food-image"
          src={foodImages[nextImageIndex]}
          alt="Food"
        /> */}
         {foodImages.map((image, index) => (
          <img
            key={index}
            className={`food-image ${index === currentImageIndex ? 'active' : ''}`}
            src={image}
            alt="Food"
          />
        ))}
         
    </div>
    
   <div className="offers">
    <h1>OFFERS</h1>
   <OfferRes/>
   </div>
    <div className="restaurants">
      <h1>ALL RESTAURANTS</h1>
      <div className="rest-cards">
      <Restaurant
      name="Pages & Coffee"
      image={pagesAndCoffee}
      place="Colombo 6"
      time="10.00AM - 07.00PM"
      isDelivery="false"
      websiteUrl="https://business.appigo.co/PagesnCoffee/"/>
      <Restaurant
       name="BreadTalk"
      image={BreadTalk}
      place="Colpetty"
      time="8.00AM - 10.00PM"
      isDelivery="false"
      websiteUrl="https://breadtalksl.appigo.co/"/>
       <Restaurant
      image={potBiriyani}
      name="Pot Biriyani"
      place="Dehiwala"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://ordernow.appigo.co/webstore/BIZ_12ud776z620?session=1691984198020"/>
      <Restaurant
      image={mangoTree}
      name="Mango Tree"
      place="Colpetty"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://themangotree.appigo.co/"/>
       <Restaurant
      image={EnglishCake}
      name="English Cake"
      place="Colombo 5"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://englishcakecompany.appigo.co/"/>
      <Restaurant
      image={kottuLabs}
      name="Kottu Labs"
      place="Nawala"
      time="8.00AM - 10.00PM"
      isDelivery="false"
      websiteUrl="https://kottulabs.appigo.co/"/>
     <Restaurant
      image={malayRes}
      name="Malay Restaurant"
      place="Dehiwala"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://malayrestaurant.appigo.co/webstore-v2/"/>
        <Restaurant
      image={ichiban}
      name="Ichiban"
      place="Colombo 8"
      time="8.00AM - 10.00PM"
      isDelivery="false"
      websiteUrl="https://ichiban.appigo.co"/>
         <Restaurant
      image={jackTree}
      name="Jack Tree"
      place="Colombo 5"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://jacktree.appigo.co/webstore-v2/"/>
       <Restaurant
      image={spicyMango}
      name="Spicy Mango"
      place="Colombo 5"
      time="8.00AM - 10.00PM"
      isDelivery="true"
      websiteUrl="https://spicymango.appigo.co"/>
        <Restaurant
      image={thai}
      name="Thai Cuisine"
      place="Colpetty"
      time="8.00AM - 10.00PM"
      isDelivery="false"
      websiteUrl="https://thaicuisine.appigo.co/webstore-v2/"/>
      </div>
      
     
    </div>
    <Footer/>
    
    </>
  )
}

export default Home