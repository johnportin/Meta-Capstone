import Logo from "./images/Logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
    return (
        // <img src={ Logo } alt="Little Lemon Logo" />
        <Router>
        <nav>
            <img src={ Logo } alt="Logo" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {/* <li>
                    <Link to="/Menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/order-online">Order Online</Link>
                </li>
                <li>
                    <Link to="login">Login</Link>
                </li> */}
            </ul>
        </nav>
        </Router>
    )
}

export { Nav };