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

              <p>
                {!rocket.reserved ? (
                  <span
                    style={{
                      backgroundColor: 'aqua', marginLeft: '10px', padding: '2px', borderRadius: '5px',
                    }}
                  >
                    Reserved
                  </span>
                ) : null }
                {rocket.rocketDescription}
              </p>
              <button
                type="button"
                onClick={() => dispatch(updateRESERVATION(rocket.rocketId))}
                style={{
                  backgroundColor: !rocket.reserved
                    ? 'white'
                    : 'rgba(3, 3, 253, 0.568)',
                  color: !rocket.reserved
                    ? 'black'
                    : 'white',
                  border: !rocket.reserved
                    ? '2px solid black'
                    : 'none',
                }}
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
