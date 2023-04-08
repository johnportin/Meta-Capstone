import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = (props) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("2023-04-04");
    const [time, setTime] = useState("12:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");
    const { availableTimes, setAvailableTimes, handleSubmit, navigate } = {...props};
    // const navigate = useNavigate();

    const onSubmit = event => {
        // console.log(date, time, guests, occasion);
        event.preventDefault();
        const success = handleSubmit(date, time, guests, occasion);
        success ? navigate("/booking-confirmation", {state: {name: name, time: time, date: date, guests: guests, occasion: occasion  }}) : alert("Please fill the form out correctly.");
    }

    let isDisabled = name.length > 0 && date.length > 0 && time.length > 0 && guests.length > 0 && occasion.length > 0 ? false : true;


    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="John Doe" id="name" required onChange={(e) => {setName(e.target.value)}} />
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value="2023-04-04" onChange={(e) => {
                setDate(e.target.value); 
                setAvailableTimes({type: 'update', payload: date});
                }} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " data-testid="res-time" onChange={(e) => {setTime(e.target.value); setAvailableTimes(e.target.value)}} >
                {
                    availableTimes ? availableTimes.map((time) => {
                        return <option className="booking-option" key={time} value={time}>{time}</option>
                    })
                    :
                    <option>12:00</option>
                }
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                onChange={(e) => {setGuests(e.target.value)}} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={(e) => {setOccasion(e.target.value)}} >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" disabled={isDisabled} />
        </form>
    )
}

export { BookingForm }