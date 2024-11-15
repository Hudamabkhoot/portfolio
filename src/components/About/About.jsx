import { useRef } from 'react';
import styles from '../../css-modules/About.module.css';
import { motion, useTransform, useScroll } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export default function About({ skills }) {
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
              <p>Hi! I’m Huda 👋 I’m a Front-End Developer with a passion for building intuitive, user-friendly applications using React, JavaScript, and TypeScript. With a background as a Product Owner, I’ve led teams, shaped product roadmaps, and ensured projects stay on track to meet user needs.</p>
              <p>I’m on the lookout for a React-focused front-end role or Project Management position where I can make an impact. If you’re hiring, let’s connect!</p>
              <p>Here are a few technologies and skills I’ve been working with recently:</p>
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
                  {tool.title}
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
      <div className={styles.curved}></div>
    </div>
  );
};

