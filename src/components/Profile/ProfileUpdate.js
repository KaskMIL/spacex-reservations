import React from 'react';
import MissionProfile from './MissionProfile';
import RocketStatus from './RocketStatus';
import DragonProfile from './DragonProfile';
import './profile.css';

function ProfilePage() {
  return (
    <div>
      <main className="container">
        <RocketStatus />
        <MissionProfile />
        <DragonProfile />
      </main>
    </div>
  );
}

export default ProfilePage;
