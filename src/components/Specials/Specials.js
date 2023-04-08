import "./Specials.css";
import "../../styles.css";
import { Card } from "./Card.js";
import bruchettaImage from "../../images/bruchetta.svg";
import greekSalad from "../../images/greekSalad.jpg";
import lemonDessert from "../../images/lemonDessert.jpg";
import { LoremIpsum } from "lorem-ipsum";

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


const cards = [
    {
        title: "Bruchetta",
        price: "8.99",
        image: bruchettaImage,
        description: lorem.generateWords(20)
    },
    {
        title: "Greek Salad",
        price: "12.99",
        image: greekSalad,
        description: lorem.generateWords(20)
    },
    {
        title: "Lemon Dessert",
        price: "4.99",
        image: lemonDessert,
        description: lorem.generateWords(20)
    }
]

const cardComponents = cards.map((card) => {
    return <Card key={ card.title } title={ card.title } price={ card.price } image={ card.image } description={ card.description } />
})

function Specials() {
    return (
        <main>
            <section className="main-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </section>
            <section className="card-container">
                { cardComponents }
            </section>
        </main>
    )
}

export { Specials };