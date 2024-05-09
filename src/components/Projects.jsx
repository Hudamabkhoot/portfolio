import React from 'react';
import styles from '../css-modules/Projects.module.css';
import ProjectItem from './ProjectItem';
import { ProjectsData } from '../data';
import {  NavLink } from 'react-router-dom';

const Projects = () => {
  const ProjectsList = ProjectsData.slice(0, 4);

  return (
    <div className="container">
      <div className={styles.projectsTitleContainer}>
        <h1><span>My work</span></h1>
      </div>
      <div className={styles.projectsContainer}>
        {ProjectsList.map((project, index) => (
          <ProjectItem key={index} project={project} />
        )).slice(0,4)}
      </div>
      <div className={styles.projectsMore}>
        <NavLink to="/project" className={styles.projectsMoreBtn}>
          Check More Of My Work
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
