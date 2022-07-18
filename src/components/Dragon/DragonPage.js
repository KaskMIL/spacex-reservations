import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDragonsAPI } from '../../Redux/DragonsReducerSlice';

import Navigation from '../Navigation/Navigation';
import DragonElement from '../dragonElement/DragonElement';

function DragonPage() {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragonsAPI());
  }, []);

  return (
    <div>
      <Navigation />
      <main>
        <section>
          {dragons.map((dragon) => (
            <DragonElement
              key={dragon.dragon_id}
              name={dragon.dragon_name}
              type={dragon.dragon_type}
              description={dragon.dragon_description}
              images={dragon.flickr_images}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default DragonPage;
