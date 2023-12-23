import './FooterStyles.css';
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{ color:"#fff", marginRight: '2rem' }} />
                    <div>
                        <p>Tanuku, West Godavari-534211</p>
                        <p>India</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{ color:"#fff", marginRight: '2rem' }}/>
                    +91 8008129664</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{ color:"#fff", marginRight: '2rem' }}/>
                     trinadharoyald1997@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Me</h4>
                <p>This is me Satyanarayana Dasari. MERN Stack Developer 
                    I enjoy discussing new projects and design challenges.</p>
                <div className='social'>
                    <a href="https://github.com/Dasari-Satya" target='_blank'><FaGithub size={30} style={{ color: '#fff', marginRight:"1rem"}} /></a>
                    <a href="https://www.instagram.com/trinadha_royal/" target='_blank'><FaInstagram size={30} style={{ color: '#fff', marginRight:"1rem"}} /></a>
                    <a href="https://www.linkedin.com/in/dasari-satyanarayana-1ab362265/" target='_blank'><FaLinkedin size={30} style={{ color: '#fff', marginRight:"1rem"}} /></a>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer;