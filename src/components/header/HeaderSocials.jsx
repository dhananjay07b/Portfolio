import React from 'react'
import{ BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/dhananjaybhardwaj/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/dhananjay07b" target='_blank'><FaGithub/></a>
        <a href="https://discordapp.com/users/dhananjay3214" target='_blank'><BsDiscord/></a>
    </div>
  )
}

export default HeaderSocials