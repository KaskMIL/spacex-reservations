import React from 'react';
import { useSelector } from 'react-redux';
import styles from './DragonProfile.module.scss';

function DragonProfile() {
  const dragons = useSelector((state) => state.dragons);
  return (
    <section className={styles.container}>
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
