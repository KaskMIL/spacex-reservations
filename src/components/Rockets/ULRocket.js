import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketAPI } from '../../Redux/RocketAPIReducer';
import SpaceLi from './SpaceLi';

function ULRocket() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketAPI());
    }
  }, []);

  return (
    <ul>
      {
        rockets.map((rocket) => (
          <SpaceLi
            key={rocket.rocket_id}
            name={rocket.rocket_name}
            type={rocket.rocket_type}
            description={rocket.rocket_description}
            images={rocket.rocket_image}
          />
        ))
      }
    </ul>
  );
}

export default ULRocket;
