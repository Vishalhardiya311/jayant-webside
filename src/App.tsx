import './App.css'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import ContactPage from './Pages/Contactpage';
import ServicesPage from './Pages/Servicespage';
import About from './components/About';
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="bg-black">
      <>
        <Header />
        <Homepage/>
        <Banner />
        <ServicesPage />
        <About/>
        <ContactPage />
        <Footer />
        <SplashCursor />
        <SplashCursor />

        {/* <Route path="/services" element={<ServicesPage />} /> */}
      </>
    </div>
  );
}

export default App
