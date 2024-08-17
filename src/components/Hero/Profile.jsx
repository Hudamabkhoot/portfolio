import { useLocation } from 'react-router-dom';
import styles from '../../css-modules/Profile.module.css';
import HomeTitle from "../Title/HomeTitle";
import Icon from '../Icon'; 


export default function Profile( {headerData }) {
  const location = useLocation();

  return (
    <section className={styles.profile}>
        <div className={styles.heading}>
        {location.pathname === '/' && <HomeTitle/>}
        </div>
      {headerData &&
      <div className={styles.socialsContainer}>
      {headerData.map((item, index) => (
           <Icon 
           key={index} 
           icon={item.icon} 
           link={item.link} 
           Container={styles.socialContainer} 
           socialIcon={styles.socialIcon}
           />
        ))}
      </div>}
      <div className={styles.scrollContainer}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  );
};

