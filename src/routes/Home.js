import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/HeroSection'
import Work from '../components/Work'
import About from '../components/AboutContent'
import Contact from '../components/Form'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Work />
      <About />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home