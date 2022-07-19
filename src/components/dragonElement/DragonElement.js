import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { dragonReserve } from '../../Redux/DragonsReducerSlice';

import styles from './DragonElement.module.scss';

function DragonElement(props) {
  const {
    name, type, description, images, id,
  } = props;

  const dispatch = useDispatch();

  const handleReserve = (e) => {
    const { id } = e.target.id;
    dispatch(dragonReserve(id));
  };

  return (
    <article className={styles.container}>
      <img src={images} alt="dragon" />
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
        <button onClick={handleReserve} id={id} type="submit">Reserve Dragon</button>
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
};

DragonElement.defaultProps = {
  name: '',
  type: '',
  description: '',
  images: '',
  id: '',
};

export default DragonElement;
