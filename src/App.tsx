import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/NavBar.tsx";
import HeroSection from "./components/HeroSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import AboutUsSection from "./components/AboutUsSection.tsx";
import Footer from "./components/Footer.tsx";

// Create new page components
function HomePage() {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <AboutUsSection />
        </>
    );
}

function ServicesPage() {
    return (
        <div>
            <h1>Our Services</h1>
            {/* Add detailed service information here */}
            <ServicesSection/>
        </div>
    );
}

function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            {/* Add detailed about us information here */}
            <AboutUsSection/>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;