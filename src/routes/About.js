import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HeroSection2 from '../components/HeroSection2'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroSection2 heading="ABOUT" text="I'm a Friendly Frontend Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About