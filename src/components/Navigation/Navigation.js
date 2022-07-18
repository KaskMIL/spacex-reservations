import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';

import styles from './Navigation.module.css';

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
              to="/rockets"
              className={(Link) => (Link.isActive ? 'active' : 'none')}
            >
              Rockets
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
              to="/dragons"
              className={(Link) => (Link.isActive ? 'active' : 'none')}
            >
              Dragons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={(Link) => (Link.isActive ? 'active' : 'none')}
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
