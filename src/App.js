import './App.css';
import './styles.css';
import { Nav } from './components/Nav/Nav.js';
import { Footer } from './components/Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { Booking } from './pages/Booking.js';
import { useReducer } from 'react';


function App() {
  const initialTimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
  const updateTimes = (state, action) => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home availableTimes={availableTimes} dispatch={dispatch}  />} />
        <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
