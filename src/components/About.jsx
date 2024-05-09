import React from 'react';
import styles from '../css-modules/About.module.css';
import { skills } from '../data';

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.aboutContainer}>
        <h1><span className={styles.aboutSpan}>About me</span></h1>
            <p>Hi! I am Huda 👋 i'm a front end developer proficient in React, Javascript, TypeScript and GitHub for version control.</p>
            <p>I'm currently on the look out for a role in front end development, ideally using React framework. I'd especially love to work in an environment where I can make an impact quickly. If you're hiring, feel free to contact me!</p>
            <div className={styles.skills}>
          {skills.map((tool, index) => (
            <div className={styles.skill} key={index}>{tool}</div>
          ))}
        </div>
        </div>
    </div>
  );
};

export default About;