import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import { FaAward } from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import {RiFolderChartLine} from 'react-icons/ri'


const About = () => {
  return (
      <section id ='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>6+ Months Working</small>
              </article>

              <article className='about__card'>
                <HiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>20+ worldwide</small>
              </article>

              <article className='about__card'>
                <RiFolderChartLine className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>

            </div>
            <p>
              Dhananjay Bhardwaj, a passionate fullstack developer with a strong love for crafting captivating websites. My focus is on creating intuitive user experiences that engage and delight users. From designing responsive layouts that adapt beautifully to various devices to the tiniest details, I ensure that every project is a true visual masterpiece.
              Staying up-to-date with the latest trends and technologies is essential to me, as I always strive to bring innovation to the forefront of my work.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>

        </div>
      </section>
    )
}

export default About