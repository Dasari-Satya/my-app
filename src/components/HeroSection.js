import './HeroSectionStyle.css';
import React from 'react'
import IntroImg from '../Assets/Images/intro-bg.jpg';
import { Link } from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={ IntroImg } alt="Intro-Img" />
        </div>
        <div className='content'>
            <h5>HI, I'M SATYANARAYANA <span> DASARI</span></h5>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className='btn'>PROJECTS</Link>
                <Link to="/contact" className='btn btn-light'>CONTACT</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection