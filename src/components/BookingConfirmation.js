import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/ReservationsStyle.css"

function BookingConfirmation ({bookingData,setBookingData,availableTimes,setAvailableTimes,}) {
  /* useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`bookings`));

    if (items != null) {
      const itemString = JSON.stringify(bookingData);
      localStorage.setItem(`bookings`, itemString);
    } else {
      const itemString = JSON.stringify(bookingData);
      localStorage.setItem(`bookings`, itemString);
    }
  }, [bookingData]); */

  useEffect(() => {
    const itemString = JSON.stringify(bookingData);
    localStorage.setItem("bookingData", itemString);
  }, [bookingData]);

  if (!bookingData) {
    return null; // Render nothing if bookingData is undefined or null
  }

  return (
    <>
      <Header />
      <div className="booking-confirmed">
        <h1>Booking Confirmed!</h1>
        <h2>Date: {bookingData.date}</h2>
        <h2>Time: {bookingData.time}</h2>
        <h2>Number of Guests: {bookingData.guests}</h2>
        <h2>Occasion: {bookingData.occasion}</h2>
      </div>
      <Footer />
    </>
  );
}

export default BookingConfirmation;