import '../../css-modules/Navbar.css';
import {  NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-container">
      <div className="logo-container">
          <div className="logo">
          <NavLink to="/">
            <img
              src={logo}
              alt="Huda Mabkhoot Logo"
              className="logo-img"
            />
            </NavLink>
          </div>
        </div>
        <div className="navbar-navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}