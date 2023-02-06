import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../style/style.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="head-icon">
          <img className="icon" src={logo} alt="logo" />
          <h2>  Space Travelers Hub </h2>
        </div>
        <ul className="links">
          <li className="link">
            {' '}
            <Link to="/Missions">Missions</Link>
            {' '}
          </li>
          <li className="link">
            {' '}
            <Link to="/Space">SpaceShips</Link>
            {' '}
          </li>
          <span className="horizontal-divider"> </span>
          <li className="link">
            {' '}
            <Link to="/Profile">My Profile</Link>
            {' '}
          </li>
        </ul>
      </nav>

    </div>
  );
}
