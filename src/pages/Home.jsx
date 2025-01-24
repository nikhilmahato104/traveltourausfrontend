import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Heading from "../components/Heading.jsx";
import TourCardList from "../components/TourCardList.jsx";
// import Divider from "../components/Divider.jsx";
import MyCompanyLocation from "../components/MyCompanyLocation.jsx";
import Stats from "../components/Stats.jsx"; // Import the updated Stats component
import Footer from "../components/Footer.jsx"; // Import the updated Footer component
import WhatsAppButton from "../components/WhatsAppButton"; // Import the button component
import YouTubeEmbed from '../components/YouTubeEmbed';
import UpArrow from '../components/UpArrow';
const Home = () => {
  return (
    <>
     <Navbar />
      <WhatsAppButton />
      <Slider /> {/* Slider includes Search Bar and Get Started Button */}
      <div ><Heading /></div>
      <div  style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    color: "white",
    padding: "50px 0"
  }}><TourCardList /></div>
      {/* Divider */}
      

      {/* Location Section */}
      <div>
        <MyCompanyLocation
          locationName="My Company"
          locationAddress="123 Business St, City, Country"
          lat="37.7749" // Example Latitude
          long="-122.4194" // Example Longitude (San Francisco)
        />
      </div>

      {/* Divider */}
      
      <div>
      {/* <h1 >My YouTube Video</h1> */}
      <YouTubeEmbed videoId="v6-51yRkVbk" />
    </div>

      {/* Stats Section */}
      <div style={{
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    color: "white",
    padding: "50px 0"
  }}>
        <Stats />
      </div>
      <div>
      <UpArrow />
      <div style={{ height: "155vh" }}>
        
      </div>
    </div>
      <Footer />
      </>
     
    
  );
};
export default Home;
