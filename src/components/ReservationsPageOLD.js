import React, { useState, useEffect } from 'react';
import "./styles/ReservationsStyle.css";
import BookingForm from './BookingForm';
import ReservationsContent from './ReservationsContent';
import { fetchAPI, submitAPI } from './API';

function ReservationsPage() {
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

    const updateTimes = () => {
    fetchAPI(date)
    .then((times) => setAvailableTimes(times))
    .catch((error) => console.log(error));
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const initializeTimes = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  updateTimes(formattedDate);
};

useEffect(() => {
  initializeTimes();
});

  const handleDateChange = (e) => {
  const selectedDate = e.target.value;
  setDate(selectedDate);
  updateTimes(selectedDate);
};

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {...ReservationsContent};

    submitAPI(formData)
    .then((success) => {
      if (success) {
        console.log("Form submitted successfully");
        // Reset form fields
        // ...
      } else {
        console.log("Form submission failed");
      }
    })
    .catch((error) => console.log(error));

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Experience the perfect balance of tradition and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <BookingForm
                availableTimes={availableTimes}
                handleDateChange={handleDateChange}
                handleSubmit={handleSubmit}
                />
            </div>
        </div>
    </div>
  );
  }
}
export default ReservationsPage