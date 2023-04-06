import './App.css';
import './styles.css';
import { Nav } from './components/Nav/Nav.js';
import { Footer } from './components/Footer/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { Booking } from './pages/Booking.js';



function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
