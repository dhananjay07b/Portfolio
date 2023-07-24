import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {LiaTelegram} from 'react-icons/lia'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dhananjay Bhardwaj</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100010085199556"><FaFacebookF/></a>
        <a href="https://www.instagram.com/dhananjaybhardwaj07/"><FaInstagram/></a>
        <a href="https://t.me/dhananjay07b"><LiaTelegram/></a>
      </div>

    </footer>
  )
}

export default Footer