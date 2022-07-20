import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';

import styles from './Navigation.module.css';

const navLinkStyles = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : '300',
  textDecoration: isActive ? 'underline' : 'none',
});

function Navigation() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; hub</h1>
      </div>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              style={navLinkStyles}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              style={navLinkStyles}
            >
              Missions
            </NavLink>
          </li>
          <li className={styles.dragons}>
            <NavLink
              to="/dragons"
              style={navLinkStyles}
            >
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              style={navLinkStyles}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
