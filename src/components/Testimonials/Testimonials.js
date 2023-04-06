import "./Testimonials.css"
import { ReviewCard } from "./ReviewCard.js"

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className="reviewCard-container">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}

export { Testimonials }