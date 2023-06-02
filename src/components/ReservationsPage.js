  import React, { useState, useEffect } from 'react';
  import "./styles/ReservationsStyle.css";
  import BookingForm from './BookingForm';
  import BookingConfirmation from './BookingConfirmation';
  import { fetchAPI, submitAPI } from './API';
  

  function ReservationsPage() {
    const [availableTimes, setAvailableTimes] = useState([]);
    
    const [bookingData, setBookingData] = useState({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });

    useEffect(() => {
      const today = new Date();
      const formattedDate = formatDate(today);
      updateTimes(formattedDate);
    }, []);

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

    const updateTimes = async (date) => {
      try {
        const times = await fetchAPI(date);

    setAvailableTimes(times); // Update availableTimes with an object

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

    /* const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = {
        date: bookingData.date,
        time: bookingData.time,
        guests: bookingData.guests,
        occasion: bookingData.occasion,
       };

      if (formData === true) {
        try {
          // setIsLoading(true);
          const success = await submitAPI(formData);
          // setIsLoading(false);

          if (success) {
            // navigate("/confirmation");
          } else {
            alert("Error");
          }
        } catch (error) {
          console.error(error);
          alert("Error");
        }
      } else {
        alert("Error");
      }
    }; */
        const handleSubmit = async (e) => {
          e.preventDefault();
          const formData = {
            date: bookingData.date,
            time: bookingData.time,
            guests: bookingData.guests,
            occasion: bookingData.occasion,
           };

          try {
              const success = submitAPI(formData);
              if (success) {
                alert("success");
                setBookingData(formData);
              } else {
                alert("Error");
              }
            } catch (error) {
              console.error(error);
              alert("Error");
            }
          }

     useEffect(() => {
 const selectedDate = new Date();
      const formattedDate = formatDate(selectedDate);
      setBookingData({
        date: formattedDate,
        time: "18:00",
        guests: 2,
        occasion: "Birthday",
      });
    }, []);

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
            <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
            <BookingForm
              availableTimes={availableTimes}
              handleDateChange={handleDateChange}
              handleSubmit={handleSubmit}
              bookingData={bookingData}
              setBookingData={setBookingData}
            />
          </div>
        </div>
        {bookingData && bookingData.date && bookingData.time && bookingData.guests && bookingData.occasion && (
        <BookingConfirmation
          bookingData={bookingData}
          setBookingData={setBookingData}
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
        )}
      </div>
    );
  }
export default ReservationsPage;

