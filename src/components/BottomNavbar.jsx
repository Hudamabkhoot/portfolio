import { NavLink } from 'react-router-dom';
import '../css-modules/BottomNavbar.css';
import Home from '../assets/home.svg'
import Projects from '../assets/projects.svg'
import Contact from '../assets/contact.svg'

export default function BottomNavBar() {
  return (
    <div className="bottomNav">
      <NavLink to="/project" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img alt="Go to Projects" src={Projects} />
        <p>Projects</p>
      </NavLink>

      <NavLink to="/" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img alt="Go to Projects" src={Home} />
        <p>Home</p>
      </NavLink>

      <NavLink to="/contact" className="bottomNav-navLink">
        <div className="bottomNav-topBorder"></div>
        <img alt="Go to Projects" src={Contact} />
        <p>Contact</p>
      </NavLink>
    </div>
  );
}