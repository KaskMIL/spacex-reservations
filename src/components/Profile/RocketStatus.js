import React from 'react';
import { useSelector } from 'react-redux';

function RocketStatus() {
  const rockets = useSelector((state) => state.rockets);
  let counter = 0;

  rockets.map((data) => {
    if (!data.reserved) {
      counter += 1;
    }
    return counter;
  });

  return (
    <>
      <section className="profile-sect">
        <h1 className="header">My Rockets</h1>
        <ul className="missionsBooked">
          {counter > 0 ? (
            rockets.map((rocket) => {
              if (!rocket.reserved) {
                return (
                  <li className="missionLi" key={rocket.rocketId}>
                    {rocket.rocketName}
                  </li>
                );
              }
              return null;
            })
          ) : (
            <li className="hide" style={{ border: 'none' }}>
              Reserved Rockets Currently(0)
            </li>
          )}
        </ul>
      </section>
    </>
  );
}

export default RocketStatus;
