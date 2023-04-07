import "./Card.css";

function Card({ title, price, image, description }) {
    return (
        <section className="card">
            <div className = "card-image-container">
                <img src={ image } alt="Card" width="250px"  className="card-image" />
            </div>
            <div className="card-data">
                <div className="card-title">
                    <h3 className="card-name">{ title }</h3>
                    <h3 className="card-price">{ price }</h3>
                </div>
                <p className="card-description">{ description }</p>
            </div>
            <h4 className="card-icon">Order a delivery oo</h4>
        </section>
    )
}

export { Card };