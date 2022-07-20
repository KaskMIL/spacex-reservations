/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DragonPage from './Dragon/DragonPage';
import MissionPage from './Mission/MissionPage';
import RocketsPage from './Rockets/RocketsPage';
import ProfilePage from './Mission/ProfilePage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<RocketsPage />}
        />

        <Route
          path="/dragons"
          element={<DragonPage />}
        />

        <Route
          path="/missions"
          element={<MissionPage />}
        />

        <Route
          exact
          path="/profile"
          element={(<ProfilePage />)}
        />

      </Routes>
    </>
  );
}

export default App;
