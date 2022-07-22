import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { cancel, reserve } from '../../Redux/DragonReducer';

import styles from './DragonElement.module.scss';

function DragonElement(props) {
  const {
    name, type, description, images, id, reserved,
  } = props;

  const dispatch = useDispatch();

  return (
    <article className={styles.container}>
      <img src={images} alt="dragon" />
      <div className={styles.dataContainer}>
        <div className={styles.reserve}>
          <h2>{name}</h2>
          {reserved ? (
            <span>RESERVED</span>
          ) : null }
        </div>
        <h3>{type}</h3>
        <p>{description}</p>
        {reserved === false ? (
          <button className={styles.resBtn} onClick={() => dispatch(reserve(id))} id={id} type="submit">
            Reserve Dragon
          </button>
        ) : (
          <button className={styles.cancelBtn} onClick={() => dispatch(cancel(id))} id={id} type="submit">
            CANCEL RESERVATION
          </button>
        )}
      </div>
    </article>
  );
}

DragonElement.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
  id: PropTypes.string,
  reserved: PropTypes.bool,
};

DragonElement.defaultProps = {
  name: '',
  type: '',
  description: '',
  images: '',
  id: '',
  reserved: false,
};

export default DragonElement;
