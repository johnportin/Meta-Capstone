import "./Footer.css";
import Logo from "./images/Logo.svg";

function Footer() {
    return (
        <footer>
            <img src={ Logo } alt="Logo" />
            <section>
                <h4>
                    Doormat Navigation
                </h4>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </section>
            <section>
                <h4>Contact</h4>
                <ul>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </section>
            <section>
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </section>
        </footer>
    )
}

export { Footer };