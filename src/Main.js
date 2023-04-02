import "./Main.css";
import { Card } from "./Card.js";
import bruchettaImage from "./images/bruchetta.svg";
import greekSalad from "./images/greekSalad.jpg";
import lemonDessert from "./images/lemonDessert.jpg";

const cards = [
    {
        title: "Bruchetta",
        price: "8.99",
        image: bruchettaImage,
        description: "description 1"
    },
    {
        title: "Greek Salad",
        price: "12.99",
        image: greekSalad,
        description: "description 2"
    },
    {
        title: "Lemon Dessert",
        price: "4.99",
        image: lemonDessert,
        description: "description 3"
    }
]

const cardComponents = cards.map((card) => {
    return <Card key={ card.title } title={ card.title } price={ card.price } image={ card.image } description={ card.description } />
})

function Main() {
    return (
        <main>
            <div class="main-header">
                <h2>This weeks specials!</h2>
                <button>Online Menu</button>
            </div>
            <div class="card-container">
                { cardComponents }
            </div>
        </main>
    )
}

export { Main };