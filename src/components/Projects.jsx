import React, { useRef } from 'react';
import styles from '../css-modules/Projects.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import ProjectItem from './ProjectItem';
import { ProjectsData } from '../data';
import TitleImg from '../assets/projectsTitle.svg'

const Projects = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  
  return (
    <div className={styles.portfolio} ref={ref}>
      <div className={styles.progress}>
        <div className={styles.progressBarContainer}>
        <motion.div style={{ scaleX }}className={styles.progressBar}></motion.div>
        </div>
        <div className={styles.progressTextContainer}>
        <img src={TitleImg} alt="Code image" className={styles.titleImg} />
        <h2>Projects</h2>
        </div>
      </div>
      <div className={styles.projects}>
        {ProjectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
        </div>
    </div>
  );
}

export default Projects;
