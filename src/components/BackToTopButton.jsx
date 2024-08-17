import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import styles from '../css-modules/BackToTopButton.module.css';
import Arrow from "../assets/arrow-up.svg";

export default function BackToTopButton () {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      className={`${styles['back-to-top-button']} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }} 
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }} 
      transition={{ delay: 0.7 }} 
    >
      <img src={Arrow} alt="Back to top" className={styles.BackToTop} />
    </motion.div>
  );
};

