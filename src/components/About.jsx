import React, { useRef } from 'react';
import styles from '../css-modules/About.module.css';
import { skills } from '../data';
import { motion, useTransform, useScroll } from 'framer-motion';
import { InView } from 'react-intersection-observer';

const About = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 3], [100, 200]);

  return (
    <div className={styles.about}>
      <div className={styles.aboutContainer}>
        <h1><span className={styles.aboutSpan}>About me</span></h1>
        <InView threshold={0.5} triggerOnce>
          {({ inView, ref: aboutRef }) => (
            <motion.div
              ref={aboutRef}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className={styles.aboutTextContainer}
            >
              <p>Hi! I am Huda 👋 I'm a front end developer proficient in React, JavaScript, TypeScript and GitHub for version control.</p>
              <p>I'm currently on the lookout for a role in front end development, ideally using the React framework. I'd especially love to work in an environment where I can make an impact quickly. If you're hiring, feel free to contact me!</p>
              <p>Here are a few technologies I've been working with recently:</p>
            </motion.div>
          )}
        </InView>
        
        <div className={styles.skills}>
          {skills.map((tool, index) => (
            <InView key={index} threshold={0.5} triggerOnce>
              {({ inView, ref: skillRef }) => (
                <motion.div
                  ref={skillRef}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each skill animation
                  className={styles.skill}
                >
                  {tool}
                </motion.div>
              )}
            </InView>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default About;
