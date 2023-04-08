import { useLocation } from 'react-router-dom';
import "../styles.css";

const ConfirmedBooking = () => {
    const location = useLocation();

    return (
        <>
            {location.state === undefined && <p>Sorry, something went wrong. Please try again.</p>}
            <section className="confirmation-container">
                <h1>Thank you for your reservation, {location.state.name}!</h1>
                <p>You have booked a table for {location.state.guests} {location.state.guests === 1 ? "person" : "people"} on {location.state.date} at {location.state.time}.</p>
                <p>We look forward to seeing you for the {location.state.occasion}!</p>
            </section>
        </>
    )
}

export { ConfirmedBooking };