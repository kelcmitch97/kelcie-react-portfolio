import React from 'react'
import './about.css';

export default function About() {
  return (
    <section id='about'>
      <div className='about-title'>
          <h1>About Me</h1>
      </div>

      <div className='about-content'>
        <div>
         <img src={require('../../assets/images/portfolio.PNG')} alt='about' className='about-img' ></img>
        </div>
        <div>
          <p>
            I am a full stack web developer with newly developed skills in Javascript, CSS, React.js,
            Node.js, MongoDB and other front-end and back-end languages. 
          </p>
        </div>
      </div>
    </section>
  )
};







