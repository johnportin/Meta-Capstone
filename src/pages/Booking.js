import { BookingForm } from '../components/BookingForm/BookingForm';
import "./Booking.css";
import "../styles.css";

const Booking = (props) => {
    return (
        <section className="booking-container">
            <section className="booking-description">
                <h2 className="booking-title">Book your table</h2>
                <p>
                    Fill in the adjacent form to book your table. We will contact you to confirm your reservation.
                </p>
            </section>
            <BookingForm {...props}/>
        </section>
    )
}

export { Booking }