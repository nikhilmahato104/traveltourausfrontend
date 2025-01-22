// import React, { useState } from "react";
// import "./TourCard.css";

// const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to toggle the booking form
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     country: "",
//     mobile: "",
//     members: "",
//   }); // State to manage form inputs

//   // Map URL for Google Maps
//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking Confirmed:", formData); // You can replace this with actual form submission logic
//     setIsFormOpen(false); // Close the form after submission
//   };

//   // Open the booking form when the "Book Now" button is clicked
//   const handleBookNowClick = () => {
//     setIsFormOpen(true);
//   };

//   // Close the form when the close button is clicked
//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <div className="tour-card">
//       {/* Image Section */}
//       <img src={image} alt={name} className="tour-image" />
//       <div className="tour-details">
//         {/* Name */}
//         <h3 className="tour-name">{name}</h3>
//         {/* Description */}
//         <p className="tour-description">{description}</p>
//         {/* Google Map */}
//         <div className="map-container">
//           <iframe
//             title={`Map of ${name}`}
//             src={mapUrl}
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//         {/* Price and Book Button */}
//         <div className="tour-footer">
//           <p className="tour-price"><span>Price :</span> ${price}</p>
//           <button className="book-now-btn" onClick={handleBookNowClick}>
//             Book Now
//           </button>
//         </div>
//       </div>

//       {/* Booking Form Section */}
//       {isFormOpen && (
//         <div className="booking-form-overlay">
//           <div className="booking-form-container">
//             <button className="close-form-btn" onClick={handleCloseForm}>
//               X
//             </button>
//             <h3>Confirm Your Booking</h3>
//             <form onSubmit={handleFormSubmit}>
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               <label>
//                 Contact:
//                 <input
//                   type="text"
//                   name="contact"
//                   value={formData.contact}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               <label>
//                 Country:
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               <label>
//                 Mobile Number:
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               <label>
//                 Number of Members:
//                 <input
//                   type="number"
//                   name="members"
//                   value={formData.members}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </label>

//               <button type="submit" className="confirm-booking-btn">
//                 Confirm Booking
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TourCard;
// import React, { useState } from "react";
// import "./TourCard.css";

// const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
//   const [isLoading, setIsLoading] = useState(false); // State for loader
//   const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color
//   const [formData, setFormData] = useState({
//     name: "",
//     contact: "",
//     country: "",
//     mobile: "",
//     members: "",
//   });

//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking confirmed:", formData);
//     setIsFormOpen(false); // Close the form after submission
//   };

//   const handleBookNowClick = () => {
//     // Show loader for 1 seconds
//     setIsLoading(true);
//     setIsCardBlue(true); // Turn the card blue
//     setTimeout(() => {
//       setIsLoading(false); // Hide loader after 2 seconds
//       setIsFormOpen(true); // Open the form after loader finishes
//     }, 1000); 
//   };
//   const handleCloseForm = () => {
//     setIsFormOpen(false); // Close the form when "X" is clicked
//     setIsCardBlue(false); // Reset card color when form closes
//   };

//   return (
//     <div>
//       {/* Tour card with dynamic classes for blur and color */}
//       <div className={`tour-card ${isFormOpen ? "blurred" : ""} ${isCardBlue ? "blue" : ""}`}>
//         <img src={image} alt={name} className="tour-image" />
//         <div className="tour-details">
//           <h3 className="tour-name">{name}</h3>
//           <p className="tour-description">{description}</p>
//           <div className="map-container">
//             <iframe title={`Map of ${name}`} src={mapUrl} allowFullScreen loading="lazy"></iframe>
//           </div>
//           <div className="tour-footer">
//             <p className="tour-price"><span>Price :</span> ${price}</p>
//             <button className="book-now-btn" onClick={handleBookNowClick}>
//               {isLoading ? (
//                 <div className="loader"></div> // Show loader when isLoading is true
//               ) : (
//                 "Book Now"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Booking form overlay */}
//       {isFormOpen && (
//         <div className="booking-form-overlay">
//           <div className="booking-form-container">
//             <button className="close-form-btn" onClick={handleCloseForm}>X</button>
//             <h3>Confirm Your Booking</h3>
//             <form onSubmit={handleFormSubmit}>
//               <label>Name:</label>
//               <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
//               <label>Contact:</label>
//               <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} required />
//               <label>Country:</label>
//               <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
//               <label>Mobile Number:</label>
//               <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
//               <label>Number of Members:</label>
//               <input type="number" name="members" value={formData.members} onChange={handleInputChange} required />
//               <button type="submit">Confirm Booking</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TourCard;

// import React, { useState } from "react";
// import "./TourCard.css";

// const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
//   const [isFormOpen, setIsFormOpen] = useState(false); // State for form visibility
//   const [isLoading, setIsLoading] = useState(false); // State for loader visibility
//   const [isCardBlue, setIsCardBlue] = useState(false); // State for card color
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     countryCode: "+61", // Default country code (Australia)
//     country: "Australia", // Default country
//     members: 1, // Default number of members
//   });

//   const countries = [
//     { name: "Australia", code: "+61" },
//     { name: "India", code: "+91" },
//     { name: "United States", code: "+1" },
//     { name: "United Kingdom", code: "+44" },
//     { name: "Canada", code: "+1" },
//   ];

//   const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(startPoint)}+to+${encodeURIComponent(endPoint)}&output=embed`;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle mobile number change (ensuring the country code is included)
//   const handleMobileChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       mobile: value.replace(/[^0-9]/g, ""), // Remove non-numeric characters from input
//     }));
//   };

//   // Handle country selection
//   const handleCountryChange = (e) => {
//     const selectedCountry = e.target.value;
//     const selectedCountryCode = countries.find(
//       (country) => country.name === selectedCountry
//     )?.code;
//     setFormData((prevData) => ({
//       ...prevData,
//       country: selectedCountry,
//       countryCode: selectedCountryCode || "+61",
//     }));
//   };

//   // Handle the booking form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking confirmed:", formData);
//     setIsFormOpen(false); // Close the form after submission
//   };

//   // Handle 'Book Now' button click
//   const handleBookNowClick = () => {
//     setIsLoading(true);
//     setIsCardBlue(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsFormOpen(true);
//     }, 1000); // Delay for loader
//   };

//   // Handle closing the form
//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//     setIsCardBlue(false); // Reset card color when form closes
//   };

//   // Handle the number of members (increment/decrement)
//   const handleNumberOfMembersChange = (action) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       members: action === "increment" ? prevData.members + 1 : Math.max(1, prevData.members - 1),
//     }));
//   };

//   return (
//     <div>
//       {/* Tour card with dynamic classes */}
//       <div className={`tour-card ${isFormOpen ? "blurred" : ""} ${isCardBlue ? "blue" : ""}`}>
//         <img src={image} alt={name} className="tour-image" />
//         <div className="tour-details">
//           <h3 className="tour-name">{name}</h3>
//           <p className="tour-description">{description}</p>
//           <div className="map-container">
//             <iframe title={`Map of ${name}`} src={mapUrl} allowFullScreen loading="lazy"></iframe>
//           </div>
//           <div className="tour-footer">
//             <p className="tour-price"><span>Price :</span> ${price}</p>
//             <button className="book-now-btn" onClick={handleBookNowClick}>
//               {isLoading ? (
//                 <div className="loader"></div> // Show loader
//               ) : (
//                 "Book Now"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Booking form overlay */}
//       {isFormOpen && (
//         <div className="booking-form-overlay">
//           <div className="booking-form-container">
//             <button className="close-form-btn" onClick={handleCloseForm}>X</button>
//             <h3>Confirm Your Booking</h3>
//             <p className="tour-confirmation-name">Tour Name: {name}</p>
//             <form onSubmit={handleFormSubmit}>
//               {/* User Name */}
//               <label>Your Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />

//               {/* Mobile Number with Country Code */}
//               <label>Mobile No.</label>
//               <div className="mobile-country">
//                 <select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleCountryChange}
//                   required
//                 >
//                   {countries.map((country) => (
//                     <option key={country.code} value={country.name}>
//                       {country.code} ({country.name})
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="text"
//                   name="mobile"
//                   value={formData.countryCode + " " + formData.mobile}
//                   onChange={handleMobileChange}
//                   placeholder="Enter mobile number"
//                   required
//                 />
//               </div>

//               {/* Number of Members */}
//               <label>Total Persons</label>
//               <div className="members-control">
//                 <button type="button" onClick={() => handleNumberOfMembersChange("decrement")}>-</button>
//                 <input type="number" name="members" value={formData.members} readOnly />
//                 <button type="button" onClick={() => handleNumberOfMembersChange("increment")}>+</button>
//               </div>

//               {/* Submit Button */}
//               <button type="submit">Confirm Booking</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TourCard;
import React, { useState } from "react";
import BookingForm from "./BookingForm"; // Import the BookingForm component
import "./TourCard.css";

const TourCard = ({ name, description, image, location, price, startPoint, endPoint }) => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [isLoading, setIsLoading] = useState(false); // State for loader
  const [isCardBlue, setIsCardBlue] = useState(false); // State to change the card color

  const handleBookNowClick = () => {
    setIsLoading(true); // Start loader
    setIsCardBlue(true); // Change card color
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      setIsFormOpen(true); // Open the booking form after 1 second
    }, 1000); // 1 second delay for loading
  };

  const handleCloseForm = () => {
    setIsFormOpen(false); // Close the form
    setIsCardBlue(false); // Reset card color
  };

  return (
    <div>
      {/* Tour card with dynamic classes for blur and color */}
      <div className={`tour-card ${isCardBlue ? "blue" : ""}`}>
        <img src={image} alt={name} className="tour-image" />
        <div className="tour-details">
          <h3 className="tour-name">{name}</h3>
          <p className="tour-description">{description}</p>
          <div className="tour-footer">
            <p className="tour-price">
              <span>Price :</span> ${price}
            </p>
            <button className="book-now-btn" onClick={handleBookNowClick}>
              {isLoading ? (
                <div className="loader"></div> // Show loader when isLoading is true
              ) : (
                "Book Now"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render the BookingForm component as a popup */}
      {isFormOpen && <BookingForm onClose={handleCloseForm} tourName={name} />}
    </div>
  );
};

export default TourCard;
