import React from 'react'

import Navbar from '../components/navbar'
import HeroSection2 from '../components/HeroSection2'
import Footer from '../components/Footer'
import Work from '../components/Work'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection2 heading="PROJECTS" text="Some of my most recent works" />
      <Work />
      <Footer/>
    </div>
  )
}

export default Project;