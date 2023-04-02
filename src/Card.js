import "./Card.css";

function Card({ title, price, image, description }) {
    return (
        <section class="card">
            <img src={ image } alt="Card" width="200px" height="150px" class="card-image" />
            <div class="card-data">
                <div class="card-title">
                    <h3 class="card-name">{ title }</h3>
                    <h3 class="card-price">{ price }</h3>
                </div>
                <p>{ description }</p>
                <h4>Order a delivery oo</h4>
            </div>
        </section>
    )
}

export { Card };