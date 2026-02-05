import FocusSlider from '../components/FocusSlider';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FocusContent from '../components/FocusContent';
import FocusContentTwo from '../components/FocusContentTwo';
import FocusGallery from '../components/FocusGallery';

export default function Home() {
  return (
    <>
     <Navbar />
     <FocusSlider />
     <FocusContent />
     <FocusContentTwo />
     <FocusGallery />
     <Footer />
    </>
  );
}
