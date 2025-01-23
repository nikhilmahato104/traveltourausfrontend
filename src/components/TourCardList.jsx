// src/components/TourCardList.jsx
import React from "react";
import TourCard from "./TourCard.jsx";

// Import images from assets folder
import slider1 from "../assets/slider2.jpg";
import slider2 from "../assets/slider1.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";

const TourCardList = () => {
  // Updated dummy tour data with unique IDs
  const dummyTours = [
    {
      id: 1,
      name: "Maithon Damm",
      description: "Experience the iconic architecture and culture of Sydney.",
      image: slider4,
      location: "Warangle, India",
      price: 299,
      startPoint: "dhanbad, India",
      endPoint: "maithon, India",
    },
    {
      id: 2,
      name: "Great Barrier Reef",
      description: "Dive into the world’s largest coral reef system.",
      image: slider2,
      location: "Queensland, Australia",
      price: 499,
      startPoint: "Cairns, Queensland",
      endPoint: "Great Barrier Reef, Queensland",
    },
    {
      id: 3,
      name: "Uluru (Ayers Rock)",
      description: "Discover the heart of Australia’s spiritual landscape.",
      image: slider3,
      location: "Northern Territory, Australia",
      price: 399,
      startPoint: "Alice Springs, Northern Territory",
      endPoint: "Uluru, Northern Territory",
    },
    {
      id: 4,
      name: "Bondi Beach",
      description: "Relax on one of Australia’s most famous beaches.",
      image: slider1,
      location: "Sydney, Australia",
      price: 199,
      startPoint: "Sydney City Center",
      endPoint: "Bondi Beach, Sydney",
    },
    {
      id: 1,
      name: "Maithon Dam",
      description: "Experience the iconic architecture and culture of Sydney.",
      image: slider4,
      location: "Warangle, India",
      price: 299,
      startPoint: "dhanbad, India",
      endPoint: "maithon, India",
    },
    {
      id: 2,
      name: "Great Barrier Reef",
      description: "Dive into the world’s largest coral reef system.",
      image: slider2,
      location: "Queensland, Australia",
      price: 499,
      startPoint: "Cairns, Queensland",
      endPoint: "Great Barrier Reef, Queensland",
    },
    {
      id: 3,
      name: "Uluru (Ayers Rock)",
      description: "Discover the heart of Australia’s spiritual landscape.",
      image: slider3,
      location: "Northern Territory, Australia",
      price: 399,
      startPoint: "Alice Springs, Northern Territory",
      endPoint: "Uluru, Northern Territory",
    },
    {
      id: 4,
      name: "Bondi Beach",
      description: "Relax on one of Australia’s most famous beaches.",
      image: slider1,
      location: "Sydney, Australia",
      price: 199,
      startPoint: "Sydney City Center",
      endPoint: "Bondi Beach, Sydney",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {dummyTours.map((tour) => (
        <TourCard
          key={tour.id}
          name={tour.name}
          description={tour.description}
          image={tour.image}
          location={tour.location}
          price={tour.price}
          startPoint={tour.startPoint}
          endPoint={tour.endPoint}
        />
      ))}
    </div>
  );
};

export default TourCardList;
