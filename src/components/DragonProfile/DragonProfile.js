import React from 'react';
import { useSelector } from 'react-redux';

function DragonProfile() {
  const dragons = useSelector((state) => state.dragons);
  return (
    <section>
      <h1>My Dragons</h1>
      <ul>
        {dragons.map((dragon) => {
          if (dragon.reserved) {
            return <li key={dragon.dragon_id}>{dragon.dragon_name}</li>;
          }
          return null;
        })}
      </ul>
    </section>
  );
}

export default DragonProfile;
