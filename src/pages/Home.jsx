// // src/pages/Home.jsx
// import React from "react";
// import Navbar from "../components/Navbar.jsx";
// import Slider from "../components/Slider.jsx";
// import Heading from "../components/Heading.jsx";
// import TourCardList from "../components/TourCardList.jsx";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Slider />
//       <Heading />
//       <TourCardList />
//     </>
//   );
// };

// export default Home;
// src/pages/Home.jsx
// import React from "react";
// import Navbar from "../components/Navbar.jsx";
// import Slider from "../components/Slider.jsx";
// import Heading from "../components/Heading.jsx";
// import TourCardList from "../components/TourCardList.jsx";
// import SearchBar from "../components/SearchBar.jsx"; // Import SearchBar
// import GetStartedButton from "../components/GetStartedButton.jsx"; // Import GetStartedButton

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <Slider>
//         {/* Centered Content (Search Bar + Get Started Button) */}
//         <div className="center-content">
//           <SearchBar />
//           <GetStartedButton />
//         </div>
//       </Slider>
//       <Heading />
//       <TourCardList />
//     </>
//   );
// };

// export default Home;
// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar.jsx";
import Slider from "../components/Slider.jsx";
import Heading from "../components/Heading.jsx";
import TourCardList from "../components/TourCardList.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider /> {/* Slider includes Search Bar and Get Started Button */}
      <Heading />
      <TourCardList />
    </>
  );
};

export default Home;
