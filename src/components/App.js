/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DragonPage from './Dragon/DragonPage';
import MissionPage from './Mission/MissionPage';
import RocketsPage from './Rockets/RocketsPage';
import ProfilePage from './ProfilePage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={(<ProfilePage />)}
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
          path="/rockets"
          element={<RocketsPage />}
        />
      </Routes>
    </>
  );
}

export default App;
