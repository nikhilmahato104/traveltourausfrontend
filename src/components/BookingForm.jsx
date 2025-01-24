import React, { useState } from "react";
import "./BookingForm.css"; // Include the CSS file for styling

const BookingForm = ({ onClose, tourName }) => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    address: "",
    country: "Australia",
    members: 1,
    countryCode: "+61",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const countryCodes = [
    { code: "+93", country: "Afghanistan" },
    { code: "+355", country: "Albania" },
    { code: "+91", country: "India" },
    
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryCodeChange = (e) => {
    setFormData({ ...formData, countryCode: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show the loading state

    try {
      const response = await fetch(
        "https://traveltouraustrilia.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setIsBookingConfirmed(true);
      } else {
        alert("Error during booking. Please try again.");
      }
    } catch (error) {
      alert("Network error occurred. Please try again.");
    } finally {
      setIsLoading(false); // Hide loading state after completion
    }
  };

  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-form-btn" onClick={onClose}>
          X
        </button>
        {!isBookingConfirmed ? (
          <>
            <h3>
              Confirm Your Booking for <br />
              <span>{tourName}</span>
            </h3>
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
              </select>
              <label>Number of Members:</label>
              <input
                type="number"
                name="members"
                value={formData.members}
                onChange={handleInputChange}
                min="1"
                required
              />
              <label>Your Current Address:</label>
              <input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                className={`confirm-booking-btn ${
                  isLoading ? "progress-active" : ""
                }`}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? (
                  <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                  </div>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="booking-success">
            <h3>Your booking was successful!</h3>
            <p>
              Thank you for booking with us. Our team will contact you within 20
              minutes.
            </p>
            <p>You can proceed with one of the following payment options:</p>
            <div className="payment-options">
              {/* Pay Online Button */}
              <button
                className="payment-option-btn"
                onClick={() => {
                  // Show Pay Online custom message
                  const onlineMessageDiv =
                    document.getElementById("custom-message");
                  onlineMessageDiv.innerHTML = `
          <h4>Online Payment Unavailable</h4>
          <p>
            Our online payment method is currently unavailable for non-Australian customers.
            Kindly proceed with <strong>Pay in Cash</strong>.
          </p>
          <button class="close-message-btn">Close</button>
        `;
                  onlineMessageDiv.style.display = "block";

                  // Add event listener to the close button
                  onlineMessageDiv
                    .querySelector(".close-message-btn")
                    .addEventListener("click", () => {
                      onlineMessageDiv.style.display = "none";
                    });
                }}
              >
                Pay Online
              </button>

              {/* Pay in Cash Button */}
              <button
                className="payment-option-btn"
                onClick={() => {
                  // Show Pay in Cash custom message with countdown
                  const cashMessageDiv =
                    document.getElementById("custom-message");
                  cashMessageDiv.innerHTML = `
          <h4>Thank You for Choosing Pay in Cash!</h4>
          <p>Redirecting to the homepage in <span id="countdown">3</span> seconds...</p>
        `;
                  cashMessageDiv.style.display = "block";

                  let countdown = 3;
                  const interval = setInterval(() => {
                    countdown -= 1;
                    document.getElementById("countdown").textContent =
                      countdown;
                    if (countdown === 0) {
                      clearInterval(interval);
                      cashMessageDiv.style.display = "none";
                      // document.write("Redirecting to homepage...");
                      //close the form
                      onClose();
                    }
                  }, 1000);
                }}
              >
                Pay in Cash
              </button>
            </div>

            {/* Custom Message Div */}
            <div id="custom-message" className="custom-message"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
