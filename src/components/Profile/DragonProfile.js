import React from 'react';
import { useSelector } from 'react-redux';

function DragonProfile() {
  const dragons = useSelector((state) => state.dragons);
  let reserveCount = 0;

  dragons.map((dragon) => {
    if (dragon.reserved) {
      reserveCount += 1;
    }
    return reserveCount;
  });

  return (
    <section className="profile-sect">
      <h1 className="header">My Dragons</h1>
      <ul className="missionsBooked">
        {reserveCount > 0 ? (
          dragons.map((dragon) => {
            if (dragon.reserved) {
              return <li className="missionLi" key={dragon.dragon_id}>{dragon.dragon_name}</li>;
            }
            return null;
          })
        ) : (
          <li style={{ border: 'none' }}>Reserved Dragons Currently(0)</li>
        )}
      </ul>
    </section>
  );
}

export default DragonProfile;
