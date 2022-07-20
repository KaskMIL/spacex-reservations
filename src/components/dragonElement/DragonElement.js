import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { reserve } from '../../Redux/DragonReducer';

import styles from './DragonElement.module.scss';

function DragonElement(props) {
  const {
    name, type, description, images, id,
  } = props;

  const dispatch = useDispatch();

  return (
    <article className={styles.container}>
      <img src={images} alt="dragon" />
      <div className={styles.dataContainer}>
        <h2>{name}</h2>
        <h3>{type}</h3>
        <p>{description}</p>
        <button onClick={() => dispatch(reserve(id))} id={id} type="submit">Reserve Dragon</button>
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
