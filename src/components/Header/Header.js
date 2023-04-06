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
                <p className="title-text">{ lorem.generateSentences(3) }</p>
                <button><Link to="/booking">Reserve a Table</Link></button>
            </section>
            <img src={ RestaurantFood } alt="Restaurant Food" width="200px" />
        </header>
    )
}

export { Header };