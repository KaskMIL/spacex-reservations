import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';

import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; hub</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            My Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dragons"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Dragons
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/missions"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Missions
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/rockets"
            className={(Link) => (Link.isActive ? 'active' : 'none')}
          >
            Rockets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
