import React, { useState } from 'react';
import "./styles/ReservationsStyle.css";
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
 
    const navigate = useNavigate();

    const handleChange = (e) => {
        switch (e.target.id) {
          case "res-date":
            setDate(e.target.value);
            dispatch(e.target.value); // Dispatch the selected date
            break;
          case "res-time":
            setTime(e.target.value);
            break;
          case "guests":
            setGuests(e.target.value);
            break;
          case "occasion":
            setOccasion(e.target.value);
            break;
          default:
            break;
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
              // You can access the form values from the state variables (name, telephone, date, time, guests, occasion)
        console.log('Form submitted:', {date, time, guests, occasion});
        // Reset the form after submission
        setDate('');
        setTime('');
        setGuests('');
        setOccasion('');
        navigate('/confirmation');
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <fieldset>
                <div className="field">
                    <label htmlFor="date" aria-label="Date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required />
                </div>
                <div className='field'>
                    <label htmlFor="time" aria-label="Time">Time:</label>
                    <select
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Select a time</option>
                            {availableTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>
                                {timeOption}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='field'>
                    <label htmlFor="guests" aria-label="Guests">Number of guests:</label>
                    <input
                        type="number"
                        placeholder="0"
                        min="1"
                        max="10"
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        required />
                </div>
                <div className='field occasion'>
                    <label htmlFor="occasion" aria-label="Occasion">Occasion (optional):</label>
                    <div className="options">
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                        >
                            <option value="">Select an occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <button className="reserve-btn" type="submit" aria-label="On Click">Submit reservation</button>
            </fieldset>
        </form>

    );
}

export default BookingForm;