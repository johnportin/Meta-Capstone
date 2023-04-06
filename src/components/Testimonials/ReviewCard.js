import "./ReviewCard.css"

const ReviewCard = (props) => {
    return (
        <div className="review-card">
            <div className="rating">
                * * * *
            </div>
            <div className="image" >
                <img alt="reviewer" />
            </div>
            <div className="reviewer">
                <p>John Doe</p>
            </div>
            <div className="review">
                <p>Worst food in Chicago! Fucking trash. I had better food from the gutters of Philly!</p>
            </div>
        </div>
    )
}

export { ReviewCard }