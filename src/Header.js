import "./Header.css";
import "./styles.css";
import RestaurantFood from "./images/food.jpg";
import { LoremIpsum, loremIpsum } from "lorem-ipsum";

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
                <h1 class="title">Little Lemon</h1>
                <h2  class="subtitle">Chicago</h2>
                <p class="title-text">{ lorem.generateSentences(3) }</p>
                <button>Reserve a Table</button>
            </section>
            <img src={ RestaurantFood } alt="Restaurant Food" width="200px" />
        </header>
    )
}

export { Header };