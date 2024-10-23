import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import styles from '../../css-modules/ProjectItem.module.css';
import Github from "../../assets/github.svg";
import Live from "../../assets/live.svg";

export default function ProjectItem({ project }) {
  const ref = useRef();

  return (
    <InView threshold={0.25}>
      {({ ref: inViewRef, inView }) => (
        <motion.div className={styles.project} ref={ref}>
          <div className={styles.imgContainer}>
            <img
              src={project.img}
              alt={`${project.title} image`}
              className={styles.projectsImg}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.projectsContent}
            ref={inViewRef}
          >
            <h2 className={styles.title}><span>{project.title}</span></h2>
            <div className={styles.projectDetails}>
              <a href={project.live} className={styles.btn}>
                <img
                  src={Live}
                  alt='Live link'
                  className={styles.live}
                />
              </a>
              <a href={project.github} className={styles.btn}>
                <img
                  src={Github}
                  alt='Github logo'
                  className={styles.github}
                />
              </a>
            </div>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.skillsContainer}>
              <div className={styles.skills}>
              {project.tools.map((tool, index) => (
                <div className={styles.skill} key={index}>
                  <img
                    src={tool.link}
                    title={tool.title}
                    className={styles.toolIcon}
                  />
                </div>
              ))}
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </InView>
  );
}
