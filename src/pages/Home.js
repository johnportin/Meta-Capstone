import { Header } from '../components/Header/Header.js';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { About } from '../components/About/About.js';
import { CallToAction } from '../components/CallToAction/CallToAction';
import { Specials } from '../components/Specials/Specials.js';
import "../styles.css";

const Home = () => {
    return (
        <section className="home-container">
            <CallToAction />
            <Header />
            <Specials />
            <Testimonials />
            <About />
        </section>
    );
}

export { Home }