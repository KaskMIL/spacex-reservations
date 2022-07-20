import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketAPI, updateRESERVATION } from '../../Redux/RocketAPIReducer';
import styles from './SpaceLi.module.css';

function ULRocket() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRocketAPI());
    }
  }, []);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  };

  const reserveToggle = (id) => dispatch(updateRESERVATION(id));

  return (
    <>
      <hr style={{ margin: 'auto 15px' }} />
      <ul style={style}>
        {
        rockets.map((rocket) => (
          <li
            className={styles.li}
            key={rocket.rocketId}
          >
            <img src={rocket.rocketImage} alt={rocket.rocketType} />
            <div>
              <h2>{rocket.rocketName}</h2>
              <h3>
                {rocket.rocketType}
              </h3>
              <br />
              {rocket.reserved ? (<span>Reserved</span>) : null }
              <p>{rocket.rocketDescription}</p>
              <button
                type="button"
                onClick={reserveToggle(rocket.rocketId)}
              >
                {!rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))
      }
      </ul>
    </>
  );
}

export default ULRocket;
