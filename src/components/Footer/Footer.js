import "./Footer.css";
import "../../styles.css";
import Logo from "../../images/Logo.svg";

function Footer() {
    return (
        <footer className="footer-container">
            <img src={ Logo } alt="Logo" />
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