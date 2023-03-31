import food from "./images/food.jpg"

function Card() {
    return (
        <section>
            <img src={ food } alt="Card" width="200px" height="150px" />
            <h3>Card Title</h3>
            <h3>Price</h3>
            <p>Card Description</p>
            <h4>Order a delivery oo</h4>
        </section>
    )
}

export { Card };