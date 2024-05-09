import React, { useState, useEffect } from 'react';
import styles from '../css-modules/BackToTopButton.module.css'; // Import CSS module
import Arrow from "../assets/arrow-up.svg";

const BackToTopButton = () => {
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
    <div className={`${styles['back-to-top-button']} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
        <img src={Arrow} alt="Back to top" className={styles.BackToTop} />
    </div>
  );
};

export default BackToTopButton;
