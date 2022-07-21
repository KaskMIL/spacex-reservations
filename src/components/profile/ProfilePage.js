import React from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

function ProfilePage() {
  const missionProfile = useSelector((state) => state.missions);
  const missions = missionProfile;
  const missionsReserved = missions.filter((data) => data.reserved === true);
  let missionCounter = 0;

  missions.map((data) => {
    if (data.reserved) {
      missionCounter += 1;
    }
    return missionCounter;
  });
  return (
    <div>
      <div className="profile-sect">
        <h1 className="header">My Missions</h1>
        <ul className="missionsBooked">
          {missionCounter > 0 ? (
            missionsReserved.map((data) => (
              <li className="missionLi" key={data.mission_id}>
                {data.mission_name}
              </li>
            ))
          ) : (
            <li className="hide" style={{ border: 'none' }}>
              reserved missions currently(0)
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;
