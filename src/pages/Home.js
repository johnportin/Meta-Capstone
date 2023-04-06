import { Header } from '../components/Header/Header.js';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { About } from '../components/About/About.js';
import { CallToAction } from '../components/CallToAction/CallToActionl';
import { Specials } from '../components/Specials/Specials.js';

const Home = () => {
    return (
        <div>
            <CallToAction />
            <Header />
            <Specials />
            <Testimonials />
            <About />
        </div>
    );
}

export { Home }