import "./Nav.css";
import "../../styles.css";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <img src={ Logo } alt="Logo" />
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link" href="#about">About</Link>
                </li>
                <li>
                    <Link className="link" href="#menu">Menu</Link>
                </li>
                <li>
                    <Link className="link" to="/booking">Reservations</Link>
                </li>
                <li>
                    <Link className="link" href="#order">Order</Link>
                </li>
                <li>
                    <Link className="link" href="#login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}

export { Nav };