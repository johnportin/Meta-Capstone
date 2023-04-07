import "./Footer.css";
import "../../styles.css";
import Logo from "../../images/Logo.svg";
import SmallLogo from "../../images/llSmall.jpg";


function Footer() {
    return (
        <footer className="footer-container">
            <img id="logo-footer-large" src={ Logo } alt="Logo" />
            <img id="logo-footer-small" src={ SmallLogo } alt="Logo" />
            <section>
                <h3>Contact</h3>
                <ul className="footer-ul">
                    <li>1234 Blanket Place Dr.</li>
                    <li>Phone: (222) 123-4567</li>
                    <li>Email: ll@yahoo.com</li>
                </ul>
            </section>
            <section>
                <h3>Social Media</h3>
                <ul className="footer-ul">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </section>
        </footer>
    )
}

export { Footer };