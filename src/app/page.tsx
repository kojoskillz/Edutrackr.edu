import '../app/globals.css';
import BackgroundBoxesDemo from '../components/LandingPage';
import Navbar from '../components/Navbar';
import Schools  from '../components/Schools';
import TextRevealDemo from '../components/TextReveal';
import AccordionDemo from '../components/FAQ';
import MagicCardDemo from '../components/Testimonial';
import Pricing from '../components/Pricing';
import BentoDemo from "../components/Features"
import { LampDemo } from '../components/Footer';
// import WorldMapDemo from '../components/WorldMap';

export default function landingPage() {
  return (
    <>
        <Navbar />
        <BackgroundBoxesDemo />
        <Schools />
        <TextRevealDemo />
        <BentoDemo />
        <Pricing />
        <MagicCardDemo />
        <AccordionDemo />
        <LampDemo />
        {/* <WorldMapDemo /> */}
         
    </>
  );
}
