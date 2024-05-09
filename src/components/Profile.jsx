import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css-modules/Profile.module.css';
import { iconsHome } from '../data';
import HomeTitle from "./HomeTitle";
import ProjectsTitle from '../components/ProjectsTitle'
import Icon from './Icon'; 


const Profile = () => {
  const location = useLocation();

  return (
    <section className={styles.profile}>
        <div className={styles.heading}>
        {location.pathname === '/' && <HomeTitle/>}
        {location.pathname === '/project' && <ProjectsTitle />}

        </div>
      <div className={styles.socialsContainer}>
      {iconsHome.map((item, index) => (
           <Icon 
           key={index} 
           icon={item.icon} 
           link={item.link} 
           Container={styles.socialContainer} 
           socialIcon={styles.socialIcon}
           />
        ))}
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

export default Profile;
