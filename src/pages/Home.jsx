import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Heading from "../components/Heading.jsx";
import TourCardList from "../components/TourCardList.jsx";
import Divider from "../components/Divider.jsx";
import MyCompanyLocation from "../components/MyCompanyLocation.jsx";
import Stats from "../components/Stats.jsx"; // Import the updated Stats component
import Footer from "../components/Footer.jsx"; // Import the updated Footer component
import WhatsAppButton from "../components/WhatsAppButton"; // Import the button component
import YouTubeEmbed from '../components/YouTubeEmbed';
const Home = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Slider /> {/* Slider includes Search Bar and Get Started Button */}
      <Heading />
      <TourCardList />
      
      {/* Divider */}
      <Divider />

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
      <Divider />
      <div>
      {/* <h1 >My YouTube Video</h1> */}
      <YouTubeEmbed videoId="v6-51yRkVbk" />
    </div>

      {/* Stats Section */}
      <div>
        <Stats />
      </div>
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
