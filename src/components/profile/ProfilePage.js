import React from 'react';
import MissionProfile from './MissionProfile';
import RocketStatus from './RocketStatus';
import DragonProfile from './DragonProfile';
import './profile.css';

function ProfilePage() {
  return (
    <main className="container">
      <RocketStatus />
      <MissionProfile />
      <DragonProfile />
    </main>
  );
}

export default ProfilePage;
