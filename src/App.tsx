import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar.tsx";
import HeroSection from "./components/HeroSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import AboutUsSection from "./components/AboutUsSection.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <AboutUsSection/>
    </>
  )
}

export default App
