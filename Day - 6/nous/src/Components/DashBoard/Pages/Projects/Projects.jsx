import React from 'react';
import './Projects.css';
import Project1 from '../../../Mainpage/Project 1.jpg';
import Project2 from '../../../Mainpage/Project 2.jpg';
import Project3 from '../../../Mainpage/Project 3.jpg';
import Project4 from '../../../Mainpage/Project 4.png';

export default function Projects() {
  return (
    <div className="projects-main-content">
      <div className='projects-welcome'>
        <h1>Projects</h1>
        <p>Here, you can effortlessly manage your DIY projects, stay updated on recent activities.</p>
      </div>
      <div className='projects-projects'>
        <div className="projects-project-card">
          <img src={Project1} alt="Project 1" />
          <h3>Wall Sconces</h3>
          <p>Easy, fun, and affordable DIY wall sconces with a shelf made out of wood and metal for hanging tea lights by Laci Jane DIY.</p>
        </div>
        <div className="projects-project-card">
          <img src={Project2} alt="Project 2" />
          <h3>TERRACOTTA POT</h3>
          <p>These DIY plant stands are the perfect finishing touch to bring the outside in. Add a bespoke biophilic element to your space with these inspiring ideas.</p>
        </div>
        <div className="projects-project-card">
          <img src={Project3} alt="Project 3" />
          <h3>Terracotta Paint Hack</h3>
          <p>A nifty little trick, via TikTok, to turn mismatched glass, plastic, and ceramic vessels into textural “terracotta” pieces, using just baking soda and paint.</p>
        </div>
        <div className="projects-project-card">
          <img src={Project4} alt="Project 4" />
          <h3>PLANT STAND</h3>
          <p>Build stylish plant stands to hold plant pots of your choice. Saw the legs, put together, stain in shade of your choice.</p>
        </div>
      </div>
    </div>
  )
}
