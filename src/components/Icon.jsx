export default function Icon ({ icon, link, Container, socialIcon}) {
  return (
    <div className={Container}>
      <a href={link}>
          <img
          src={icon}
          alt={`${icon} icon`}
          className={socialIcon}
        />
      </a>
    </div>
  );
};

