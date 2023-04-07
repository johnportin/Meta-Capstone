import "./Nav.css";
import "../../styles.css";
import Logo from "../../images/Logo.svg";
import SmallLogo from "../../images/llSmall.jpg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <img id="logo-top-full" src={ Logo } alt="Logo" />
            <img id="logo-top-small" src={ SmallLogo } alt="Logo" />
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