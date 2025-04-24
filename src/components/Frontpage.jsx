import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

import Background from './Background';

const Frontpage = () => {
  
  
  return (
    <div>
       <Background />
        <div className="content">
            <div className="title">
          <h1>Hey, I'm Despina, but I use AkatsukiFTW across the internet.</h1>
          </div>
          <div className="text">
            <p>
                I am a front-end web developer
            </p>
        </div>
        <div className='more'>
            <div className="more-about-me">
            <Link to="/about-me">More about me</Link>
            </div>
            <div className="projects">
                <a href="/projects">Projects</a>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Frontpage