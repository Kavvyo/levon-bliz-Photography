import { useState } from "react"

import Navbar from "./components/Navbar"
import Mobilenav from "./components/Mobilenav";
import Home from "./components/sections/home"
import Gallary from "./components/sections/Gallary";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import BackToTop from "./components/BackToTop";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar  menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Mobilenav menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <BackToTop />
      <Home />
      <Gallary />
      <About />
      <Contact />
      <Footer />
      
      
    </>
  )
}

export default App
