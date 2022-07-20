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
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
        {reserved === false ? (
          <button onClick={() => dispatch(reserve(id))} id={id} type="submit">
            Reserve Dragon
          </button>
        ) : (
          <button onClick={() => dispatch(cancel(id))} id={id} type="submit">
            Cancel Reservation
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
