import styles from '../css-modules/Footer.module.css';
import Icon from './Icon';

export default function Footer( {footerData} ) {
  const copyright = String.fromCodePoint(0x00A9);
  
  return (
    <div className={styles.footerComponent}>
      <div className={styles.copyright}>
        <a>{`${copyright} 2024 Huda Mabkhoot`}</a>
      </div>
      <div className={styles.footerIcons}>
        {footerData.map((item, index) => (
          <Icon 
          key={index} 
          icon={item.icon} 
          link={item.link} 
          Container={styles.footerIcons}
          socialIcon={styles.socialIcon}
          />
        ))}
      </div>
    </div>
  );
};

