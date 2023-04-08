import './App.css';
import './styles.css';
import { Nav } from './components/Nav/Nav.js';
import { Footer } from './components/Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { Booking } from './pages/Booking.js';
import { useReducer, useEffect } from 'react';
import { fetchAPI, submitAPI } from "./fetchUtils.js"; 
import { ConfirmedBooking } from './pages/ConfirmedBooking';


function App() {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case "initialize": {
        return action.payload;
      }
      case "update": {
        console.log(action)
        return fetchAPI(new Date(action.payload));
      }
      default: {
        return state;
      }
    }
  }

  const submitForm = (date, time, guests, occasion) => {
    let formData = {date, time, guests, occasion};
    let response = submitAPI(formData);
    return response;
  }
  
  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, ["00:00"]);

  const initializeTimes = async () => {
    let today = new Date();
    let response = await fetchAPI(today);
    setAvailableTimes({type: "initialize", payload: response});
  }

  useEffect(() => {
    initializeTimes();
  }, [])

  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}  />} />
        <Route path="/booking" element={<Booking availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} handleSubmit={submitForm} />} />
        <Route path="/booking-confirmation" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
