import '../app/globals.css';
import BackgroundBoxesDemo from '../components/LandingPage';
import Navbar from '../components/Navbar';
import Schools  from '../components/Schools';
import TextRevealDemo from '../components/TextReveal';
import AccordionDemo from '../components/FAQ';
import MagicCardDemo from '../components/Testimonial';
// import { BentoDemo } from '../components/Features';
// import WorldMapDemo from '../components/WorldMap';

export default function landingPage() {
  return (
    <>
        <Navbar />
        <BackgroundBoxesDemo />
        <Schools />
        {/* <BentoDemo /> */}
        <TextRevealDemo />
        <MagicCardDemo />
        <AccordionDemo />
        {/* <WorldMapDemo /> */}
        
      
    
    
    </>
  );
}
