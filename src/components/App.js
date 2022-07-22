import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DragonPage from './Dragon/DragonPage';
import MissionPage from './Mission/MissionPage';
import RocketsPage from './Rockets/RocketsPage';
import ProfilePage from './Profile/ProfileUpdate';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>

        <Route path="/" element={<RocketsPage />} />

        <Route path="/dragons" element={<DragonPage />} />

        <Route path="/missions" element={<MissionPage />} />

        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
