import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DragonPage from './Dragon/DragonPage';
import MissionPage from './Mission/MissionPage';
import RocketsPage from './Rockets/RocketsPage';
import ProfilePage from './Profile/ProfilePage';
import Footer from './Footer/Footer';
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
      <Footer />
    </>
  );
}

export default App;
