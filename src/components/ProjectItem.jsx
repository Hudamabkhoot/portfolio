import React from 'react';
import styles from '../css-modules/ProjectItem.module.css';

const ProjectItem = ({ project }) => {
return (
  <div className={styles.project}>
    <div className={styles.imgContainer}>
    <img 
        src={project.image} 
        alt={project.title} 
        className={styles.projectsImg}
      />
    </div>
    <div className={styles.projectsContent}>
      <h2 className={styles.title}><span>{project.title}</span></h2>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.skillsContainer}>
        <div className={styles.skills}>
          {project.tools.map((tool, index) => (
            <div className={styles.skill} key={index}>{tool}</div>
          ))}
        </div>
      </div>
      <div className={styles.projectDetails}>
        {project.live && <a
          href={project.live}
          className={styles.btn}
        >Live site</a>
        }
        <a
          href={project.github}
          className={styles.btn}
        >More On Github</a>
      </div>
    </div>
  </div>
)};

export default ProjectItem;
