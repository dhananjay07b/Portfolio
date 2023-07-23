import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
              <p>Bulding end-to-end web applications</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Provide wireframes and the tech stack</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Responsive, accessible, and intuitive design</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Regular updates to add new features</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>API Integration</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
              <p>Custom APIs for data transfer</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Documentation to apply API effectively</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Suggesting a proper deprecation strategy</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><BiCheck className='service__list-icon'/>
              <p>Designing visual elements</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Design with inclusive abilities to user</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
              <p>Design assets with successful implementation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services