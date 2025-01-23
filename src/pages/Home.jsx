// import React from "react";
// import Navbar from "../components/Navbar.jsx";
// import Slider from "../components/Slider.jsx";
// import Heading from "../components/Heading.jsx";
// import TourCardList from "../components/TourCardList.jsx";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Slider /> {/* Slider includes Search Bar and Get Started Button */}
//       <Heading />
//       <TourCardList />
//     </>
//   );
// };

// export default Home;





import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Heading from "../components/Heading.jsx";
import TourCardList from "../components/TourCardList.jsx";
import Divider from "../components/Divider.jsx"; // Import the Divider component
import MyCompanyLocation from "../components/MyCompanyLocation.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Slider /> {/* Slider includes Search Bar and Get Started Button */}
      <Heading />
      <TourCardList />
      
      {/* Use the Divider component here */}
      <Divider />
      <div>
      <MyCompanyLocation
        locationName="My Company"
        locationAddress="123 Business St, City, Country"
        lat="37.7749" // Example Latitude
        long="-122.4194" // Example Longitude (San Francisco)
      />
    </div>
    <Divider />
    </>
  );
};

export default Home;
