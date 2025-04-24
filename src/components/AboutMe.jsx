import React from 'react'
import Background from './Background'
import anime from '../assets/images/girl.png'
import CursorAnimation from './CursorAnimetion'

const AboutMe = () => {
  return (
    <div>
      <CursorAnimation />
      <div className='background_a'>
        <div className='about-container'>
          <div className='about-me-container'>
            <div className='more-a'>
              <div className='about-more-info'>
                <h1>About Me</h1>
                <hr className='head-seperator'></hr>
                <p>Hi, my name is Despina and I use AkatsukiFTW as my nickname.
                  I'm a passionate front-end developer with a keen eye for detail 
                  and a deep appreciation for user experience. My journey in web 
                  development has led me to learn front-end technologies like 
                  HTML, CSS, and JavaScript, alongside popular frameworks like 
                  React and tools like Tailwind CSS.While I'm still building my 
                  expertise, I also know some basics of Node.js, which
                   helps me understand how server-side technologies fit into web 
                   development. My goal is to keep growing and contribute to 
                   building better web experiences.
                  </p>
              </div>
              <div className='image'>
                <img src={anime} />
              </div>
            </div>
          </div>
          

        </div>

      </div>

    
    </div>
  )
}

export default AboutMe