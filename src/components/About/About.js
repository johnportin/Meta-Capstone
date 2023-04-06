import "./About.css"
import pic1 from "../../images/MarioAdrian1.jpg";
import pic2 from "../../images/MarioAdrian2.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-text-container">
                <div className="about-title-container">
                    <h1>LittleLemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className="about-description-container">
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
            </div>
            <div className="about-image-container">
                <div className="about-image image1">
                    <img src={pic2} />
                </div>
                <div className="about-image image2">
                    <img src={pic1} />
                </div>

            </div>
        </div>
    )
}

export { About }