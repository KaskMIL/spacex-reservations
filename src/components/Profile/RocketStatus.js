import React from 'react';
import { useSelector } from 'react-redux';

function RocketStatus() {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === false);
  let counter = 0;

  rockets.map((data) => {
    if (data.reserved) {
      counter += 1;
    }
    return counter;
  });

  return (
    <>
      <div className="profile-sect">
        <h1 className="header">My Rockets</h1>
        <ul className="missionsBooked">
          {counter <= 0
            ? (
              <li className="hide" style={{ border: 'none' }}>
                Reserved Rockets Currently(0)
              </li>
            )
            : (
              rocketsReserved.map((rocket) => (
                <li className="missionLi" key={rocket.rocketId}>
                  {rocket.rocketName}
                </li>
              ))
            ) }
        </ul>
      </div>
    </>
  );
}

export default RocketStatus;
