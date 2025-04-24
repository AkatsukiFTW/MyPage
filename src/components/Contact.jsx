import React from 'react'
import Background from './Background'

const Contact = () => {
  return (
    <div>
    <Background />
    <div className='contact-box'> 
      <div className='contact-info'>
        <div className="c-title"> 
           <h1>Contact</h1>
        </div>
        <hr className='head-seperator'></hr>
        <div className='contact'>
          <div className='email'>
            <h2>email</h2>
            <a href="mailto:d.stefanou99@gmail.com">d.stefanou99@gmail.com</a>
          </div>
          <div className="git">
            <h2>github</h2>
            <a href="https://github.com/AkatsukiFTW">AkatsukiFTW</a>
          </div>
        </div>
      </div>
      
    </div>
    

    </div>
    
  )
}

export default Contact