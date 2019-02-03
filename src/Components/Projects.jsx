import React from 'react';
import Transliterator from '../img/TransliteratorUI.png'
import TechApp from '../img/TechAppUI.gif'

const projects = [
  {
    title: "Transliterator",
    url: "https://github.com/jwhittle933/Transliterator",
    gif: Transliterator
  },
  {
    title: "TechApp",
    url: "https://github.com/jwhittle933/TechApp2.0",
    gif: TechApp
  },
  {
    title: "Its The Whittle Things",
    url: "https://github.com/jwhittle933/itsthewhittlethings",
    gif: ""
  },
  {
    title: "Catalog",
    url: "https://github.com/jwhittle933/book_catalog",
    gif: ""
  },
  {
    title: "Golang BMR Calculator",
    url: "https://github.com/jwhittle933/bmrCalculator",
    gif: ""
  }
]

const Projects = () => 
  <div className="wrapper projects">
    <h2>Notable Projects</h2>
    <p>All of my projects can be viewed on <a href="https://github.com/jwhittle933?tab=repositories" rel="noopener noreferrer" target="_blank">GitHub</a></p>
    <div className="projects-flex">
    {
      projects.map( project => (
          <div className="tile">
            <div className="tile-splash">
              <img src={project.gif} alt="Example UI"></img>
            </div>
            <div className="tile-bottom">
              <a href={project.url} rel="noopener noreferrer" target="_blank"><p>{project.title}</p></a>
            </div>
        </div>
        )
      )
    }
    </div>
    <h2>Freelance</h2>
    <p><a href="http://www.philosophipotamus.com" rel="noopener noreferrer" target="_blank">Philosophipotamus.com</a>: A philosophical website for Dr. Mark Coppenger. A WordPress site.</p>
  </div>

export default Projects;