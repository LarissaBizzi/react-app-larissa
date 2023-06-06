import React, { useState, useEffect } from 'react';
import "./styles/ReservationsStyle.css";
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';
import { fetchAPI, submitAPI } from './API';

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function ReservationsPage() {
  const [availableTimes, setAvailableTimes] = useState([]);

  const [bookingData, setBookingData] = useState({
    date: formatDate(new Date()),
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
  });

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDate(today);
    updateTimes(formattedDate);
  }, []);

    const initializeTimes = () => {
    const today = new Date();
    const formattedDate = formatDate(today);
    updateTimes(formattedDate);
  };

  const updateTimes = async (date) => {
    try {
      const times = await fetchAPI(date);
      setAvailableTimes(times);
      console.log("success");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    updateTimes(selectedDate);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date: bookingData.date,
      time: bookingData.time,
      guests: bookingData.guests,
      occasion: bookingData.occasion,
    };

    try {
      const success = await submitAPI(formData);
      if (success) {
        alert("Success");
        setBookingData(formData);
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>Please fill in and submit the form to book your reservation at Little Lemon.</p>
          <BookingForm
            availableTimes={availableTimes}
            handleDateChange={handleDateChange}
            handleSubmit={handleSubmit}
            bookingData={bookingData}
            setBookingData={setBookingData}
          />
        </div>
      </div>
        <BookingConfirmation
          bookingData={bookingData}
          setBookingData={setBookingData}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
    </div>
  );
}

export default ReservationsPage;  