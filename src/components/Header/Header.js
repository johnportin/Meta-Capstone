import "./Header.css";
import "../../styles.css";
import RestaurantFood from "../../images/food.jpg";
import { LoremIpsum, loremIpsum } from "lorem-ipsum";
import { Link } from "react-router-dom";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

function Header() {
    return (
        <header>
            <section>
                <h1 className="title">Little Lemon</h1>
                <h2  className="subtitle">Chicago</h2>
                <p className="title-text">{ lorem.generateSentences(5) }</p>
                <button><Link className="button-text" to="/booking">Reserve a Table</Link></button>
            </section>
            <div className="title-image-container">
                <img className="title-image" src={ RestaurantFood } alt="Restaurant Food" />
            </div>
        </header>
    )
}

export { Header };