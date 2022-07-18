import React from 'react';
import { NavLink } from 'react-router-dom';

const head = 'Space Traveler\'s Hub';
function Navigation() {
  return (
    <nav>
      <div>
        <h1>{head}</h1>
        <ul>
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
      </div>
    </nav>
  );
}

export default Navigation;
