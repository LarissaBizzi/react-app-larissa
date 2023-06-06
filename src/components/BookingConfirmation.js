import React, { useEffect } from "react";
import Footer from "./Footer";
import "./styles/ReservationsStyle.css";

function BookingConfirmation({ bookingData }) {
  useEffect(() => {
    if (bookingData != null) {
      const itemString = JSON.stringify(bookingData);
      localStorage.setItem("bookingData", itemString);
    }
    console.log("BookingData:", bookingData);
  }, [bookingData]);

  return (
    <>
      <div className="booking-confirmed">
        <h1>Booking Confirmed!</h1>
        {bookingData && (
          <>
            <h2>Date: {bookingData.date}</h2>
            <h2>Time: {bookingData.time}</h2>
            <h2>Number of Guests: {bookingData.guests}</h2>
            <h2>Occasion: {bookingData.occasion}</h2>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default BookingConfirmation;