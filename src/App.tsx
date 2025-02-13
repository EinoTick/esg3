import { useState } from 'react'
import './App.css'
import Navbar from "./components/NavBar.tsx";
import HeroSection from "./components/HeroSection.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <HeroSection/>
    </>
  )
}

export default App
