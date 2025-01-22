import React, { useState } from "react";
import "./BookingForm.css"; // Create a CSS file for styling

const BookingForm = ({ onClose, tourName }) => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "", // Default phone number without country code
    address: "",
    country: "Australia", // Default country
    members: 1,
    countryCode: "+61", // Default country code for Australia
  });

  const countryCodes = [
    { code: "+93", country: "Afghanistan" },
    { code: "+355", country: "Albania" },
    {code:"+91",country:"India"}
    // Add more countries as needed
  ];

  // Handle input change for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle country code change
  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend server
      const response = await fetch("https://traveltouraustrilia.onrender.com/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send formData as JSON
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Booking confirmed:", data);
        alert("Thank you for your booking! Your tour is confirmed.");
        onClose(); // Close the form after submission
      } else {
        console.error("Error in booking:", data);
        alert("Error occurred during booking. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error occurred. Please try again.");
    }
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-form-btn" onClick={onClose}>
          X
        </button>
        <h3>
          Confirm Your Booking for <br />
          <span>{tourName}</span>
        </h3>
        <br />
        <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label>Telephone:</label>
          <div className="telephone-container">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleCountryCodeChange}
              className="country-code"
              required
            >
              {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code} ({country.country})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <label>Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          >
            <option value="Australia">Australia</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="India">India</option>
            {/* Add other countries as needed */}
          </select>

          <label>Number of Members:</label>
          <div className="number-of-members">
            <input
              type="number"
              name="members"
              value={formData.members}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>

          <label>Your Current Address:</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            rows="3"
            required
          />

          <button type="submit" className="confirm-booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
