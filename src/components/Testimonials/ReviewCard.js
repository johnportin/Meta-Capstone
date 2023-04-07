import "./ReviewCard.css"
import "../../styles.css"

const ReviewCard = ({ rating, name, image, content }) => {
    return (
        <div className="review-card">
            <div className="rating">
                {rating}
            </div>
            <div className="image-container" >
                <img src={image} alt="reviewer" />
            </div>
            <div className="reviewer">
                <p>{ name }</p>
            </div>
            <div className="review">
                <p>{ content }</p>
            </div>
        </div>
    )
}

export { ReviewCard }