import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen d-flex flex-column">
      <Navbar />
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
