import React, { useState } from 'react';
import './Projects.css';
import Project1 from '../../../Mainpage/Project 1.jpg';
import Project2 from '../../../Mainpage/Project 2.jpg';
import Project3 from '../../../Mainpage/Project 3.jpg';
import Project4 from '../../../Mainpage/Project 4.png';

const initialProjectData = [
  {
    image: Project1,
    title: 'Wall Sconces',
    description: 'Easy, fun, and affordable DIY wall sconces with a shelf made out of wood and metal for hanging tea lights by Laci Jane DIY.',
    projectBudget: 100,
    projectTasks: [
      { id: 1, taskName: 'Buy materials', isCompleted: true, deadline: '2023-09-30' },
      { id: 2, taskName: 'Build sconces', isCompleted: false, deadline: '2023-10-10' },
    ],
  },
  {
    image: Project2,
    title: 'TERRACOTTA POT',
    description: 'These DIY plant stands are the perfect finishing touch to bring the outside in. Add a bespoke biophilic element to your space with these inspiring ideas.',
    projectBudget: 150,
    projectTasks: [
      { id: 1, taskName: 'Buy terracotta pots', isCompleted: false, deadline: '2023-09-25' },
      { id: 2, taskName: 'Paint pots', isCompleted: false, deadline: '2023-10-05' },
    ],
  },
  {
    image: Project3,
    title: 'Terracotta Paint Hack',
    description: 'A nifty little trick, via TikTok, to turn mismatched glass, plastic, and ceramic vessels into textural “terracotta” pieces, using just baking soda and paint.',
    projectBudget: 50,
    projectTasks: [
      { id: 1, taskName: 'Gather materials', isCompleted: true, deadline: '2023-09-28' },
      { id: 2, taskName: 'Apply paint hack', isCompleted: false, deadline: '2023-10-15' },
    ],
  },
  {
    image: Project4,
    title: 'PLANT STAND',
    description: 'Build stylish plant stands to hold plant pots of your choice. Saw the legs, put together, stain in shade of your choice.',
    projectBudget: 75,
    projectTasks: [
      { id: 1, taskName: 'Buy wood and tools', isCompleted: true, deadline: '2023-09-29' },
      { id: 2, taskName: 'Assemble plant stand', isCompleted: false, deadline: '2023-10-07' },
    ],
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjectData);

  // Function to mark a task as completed within a project
  const markTaskCompleted = (projectIndex, taskIndex) => {
    const updatedProjects = [...projects];
    updatedProjects[projectIndex].projectTasks[taskIndex].isCompleted = true;
    setProjects(updatedProjects);
  };

  // Function to filter and retrieve unfinished tasks
  const getUnfinishedTasks = () => {
    const unfinishedTasks = [];

    projects.forEach((project, projectIndex) => {
      project.projectTasks.forEach((task, taskIndex) => {
        if (!task.isCompleted) {
          unfinishedTasks.push({
            projectIndex,
            taskIndex,
            projectName: project.title,
            taskName: task.taskName,
            deadline: task.deadline,
          });
        }
      });
    });

    return unfinishedTasks;
  };

  const unfinishedTasks = getUnfinishedTasks();

  return (
    <div className='Projects-outer'>
      <div className="projects-main-content">
        <div className='projects-welcome'>
          <h1>Ongoing Projects</h1>
        </div>
        <div className='projects-projects'>
          {projects.map((project, projectIndex) => (
            <div className="projects-project-card" key={projectIndex}>
              <img src={project.image} alt={`Project ${projectIndex + 1}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Budget: ${project.projectBudget}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-main-content">
        <div className='projects-welcome'>
          <h1>Completed Projects</h1>
        </div>
        <div className='projects-projects'>
          {projects.map((project, projectIndex) => (
            <div className="projects-project-card" key={projectIndex}>
              <img src={project.image} alt={`Project ${projectIndex + 1}`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>Budget: ${project.projectBudget}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-unfinished-tasks">
        <div className='projects-welcome'>
          <h1>Unfinished Tasks</h1>
        </div>
        <div className="unfinished-tasks-table">
          <div className='headings'>
              <h3>Project</h3>
              <h3>Task</h3>
              <h3>Deadline</h3>
              <h3>Status</h3>
          </div>
          <div className='unfinished-tasks-values'>
            {unfinishedTasks.map((task, index) => (
              <div className= "values" key={index}>
                <p>{task.projectName}</p>
                <p>{task.taskName}</p>
                <p>{task.deadline}</p>
                <p className='False'>False</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
