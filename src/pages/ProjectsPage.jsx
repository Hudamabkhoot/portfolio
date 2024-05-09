import React, {useEffect} from 'react';
import styles from '../css-modules/ProjectsPage.module.css';
import Profile from '../components/Profile';
import ProjectItem from '../components/ProjectItem';
import { ProjectsData } from '../data';

const ProjectsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="container">
      <Profile/>
      <div className={styles.projectsContainer}>
      
        {ProjectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </main>
  );
}

export default ProjectsPage;
