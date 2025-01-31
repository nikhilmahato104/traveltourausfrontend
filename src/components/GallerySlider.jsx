// src/components/GallerySlider.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image1.jpg';
import lens1 from '../assets/lens1.png';
//import css file
import './GallerySlider.css';
// import { text } from 'stream/consumers';

const galleryImages = [
  image1,
  image1,
  image1,
  image1,
];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
        },
      },
      {
        breakpoint: 768, // For small screens (phones)
        settings: {
          slidesToShow: 1, // Show 1 slide for small screens

        },
      },
    ],
  };

  return (
    <div className="gallery-slider-container" style={{
      backgroundImage: `url(${lens1})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      color: "white",
      padding: "20px 0",
    }}>
      <h2 className="gallery-slider-title" >Our Popular Tours</h2>
      <Slider {...settings}>
        {galleryImages.map((image, index) => (
          <div key={index} style={{ padding: '10px' }}>
            <img
              src={image}
              alt={`gallery ${index}`}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
