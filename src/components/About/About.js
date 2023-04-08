import "./About.css"
import "../../styles.css"
import pic1 from "../../images/MarioAdrian1.jpg";
import pic2 from "../../images/MarioAdrian2.jpg";

const About = () => {
    return (
        <section className="about-container">
            <section className="about-text-container">
                <div className="about-title-container">
                    <h1 className="title about-title">Little Lemon</h1>
                    <h2 className="subtitle about-subtitle">Chicago</h2>
                </div>
                <div className="about-description-container">
                    <p className="about-content">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
            </section>
            <section className="about-image-container">
                <div className="about-image image1">
                    <img src={pic2} />
                </div>
                <div className="about-image image2">
                    <img src={pic1} />
                </div>

            </section>
        </section>
    )
}

export { About }