import "./Card.css";

function Card({ title, price, image, description }) {
    return (
        <section className="card">
            <img src={ image } alt="Card" width="250px"  className="card-image" />
            <div className="card-data">
                <div className="card-title">
                    <h3 className="card-name">{ title }</h3>
                    <h3 className="card-price">{ price }</h3>
                </div>
                <p className="card-description">{ description }</p>
                <h4>Order a delivery oo</h4>
            </div>
        </section>
    )
}

export { Card };