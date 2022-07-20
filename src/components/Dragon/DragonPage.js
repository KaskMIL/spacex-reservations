import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDragonsAPI } from '../../Redux/DragonReducer';

import Navigation from '../Navigation/Navigation';
import DragonElement from '../dragonElement/DragonElement';

import styles from './DragonPage.module.scss';

function DragonPage() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragons.length) {
      dispatch(getDragonsAPI());
    }
  }, []);

  return (
    <div>
      <Navigation />
      <main className={styles.container}>
        <section>
          {dragons.map((dragon) => (
            <DragonElement
              key={dragon.dragon_id}
              id={dragon.dragon_id}
              name={dragon.dragon_name}
              type={dragon.dragon_type}
              description={dragon.dragon_description}
              images={dragon.dragon_images}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default DragonPage;
