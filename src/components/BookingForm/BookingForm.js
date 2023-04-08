import React, { useState } from 'react';
import "./BookingForm.css";

const BookingForm = (props) => {
    const [date, setDate] = useState("2023-04-04");
    const [time, setTime] = useState("12:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");
    const { availableTimes, setAvailableTimes } = {...props};

    const onSubmit = event => {
        console.log(date, time, guests, occasion);
        event.preventDefault();
    }


    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={onSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e) => {setDate(e.target.value)}} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " onChange={(e) => {setAvailableTimes(e.target.value)}} >
                {
                    availableTimes ? availableTimes.map((time) => {
                        return <option className="booking-option" key={time}>{time}</option>
                    })
                    :
                    <option>12:00</option>
                }
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" max="10" 
                id="guests" 
                onChange={(e) => {setGuests(e.target.value)}} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>


    )
}

export { BookingForm }