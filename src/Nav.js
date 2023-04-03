import "./Nav.css";
import Logo from "./images/Logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
        <Router>
        <nav>
            <img src={ Logo } alt="Logo" />
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" to="/about">About</Link>
                </li>
                <li>
                    <Link className="link" to="/Menu">Menu</Link>
                </li>
                <li>
                    <Link className="link" to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link className="link" to="/order-online">Order</Link>
                </li>
                <li>
                    <Link className="link" to="login">Login</Link>
                </li>
            </ul>
        </nav>
        </Router>
    )
}

export { Nav };