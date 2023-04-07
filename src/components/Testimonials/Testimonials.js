import "./Testimonials.css"
import { ReviewCard } from "./ReviewCard.js"
import muskMommy from "../../images/muskMommy.jpg"
import { LoremIpsum } from "lorem-ipsum"

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


const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="reviewCard-container">
                <ReviewCard 
                    rating="***" 
                    name="Theresa" 
                    image={muskMommy} 
                    content={lorem.generateWords(20)}    
                />
                <ReviewCard 
                    rating="*****" 
                    name="Lark" 
                    image={muskMommy} 
                    content={lorem.generateWords(20)}    
                />
                <ReviewCard 
                    rating="**" 
                    name="Felix" 
                    image={muskMommy} 
                    content={lorem.generateWords(20)}    
                />
                <ReviewCard 
                    rating="**" 
                    name="Gerda" 
                    image={muskMommy} 
                    content={lorem.generateWords(20)}    
                />

            </div>
        </div>
    )
}

export { Testimonials }