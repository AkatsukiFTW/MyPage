import React,{useState} from 'react'
import CursorAnimation from './CursorAnimetion'
import animeCol from "../assets/images/animeCol.gif";
import todoGif from "../assets/images/todo.gif";
import musicList from "../assets/images/music.gif";
import weather from "../assets/images/Weather.gif";

const Projects = () => {
  const [hoveredProject,setHoveredProject]=useState(null);

  const projects=[
    {
      name:"Music Player",
      image:musicList,
      link:"https://github.com/AkatsukiFTW/MusicPlayer"
    },
    { 
      name: "To Do List", 
      image: todoGif,
      link: "https://github.com/AkatsukiFTW/ToDoList" 
    },
    { 
      name: "Weather App", 
      image: weather , 
      link: "https://github.com/AkatsukiFTW/WeatherApp" 
    },
    { 
      name: "Anime Collection", 
      image: animeCol, 
      link: "https://github.com/AkatsukiFTW/AnimeCollection" 
    },

  ]

  return (
    <div>
      <CursorAnimation />
      <div className='background'>
        <div className='projContainer'>
          <div className='projImage'
          style={{
              backgroundImage: hoveredProject ? `url(${hoveredProject})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.5s ease-in-out",
              opacity: hoveredProject ? 1 : 0, 
            }}>
          </div>
          <div className="projSection">
            <ul>
              {projects.map((project, index) => (
               
               <div>
                <li
                  key={index}
                  onMouseEnter={() => setHoveredProject(project.image)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <a href={project.link}>
                    <div className="arrow">➜</div>
                    {project.name}
                  </a>
                  
                </li>
                
                <hr className="head-seperator" />
                </div>
              ))}
              
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects