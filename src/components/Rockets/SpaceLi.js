import React from 'react';
import PropTypes from 'prop-types';
import styles from './SpaceLi.module.css';

function SpaceLi(props) {
  const {
    type, description, images, name,
  } = props;
  return (
    <>
      <li className={styles.li}>
        <img src={images} alt={type} />
        <div>
          <h2>{name}</h2>
          <br />
          {/* <button type="button">Reserved</button> */}
          <p>{description}</p>
          <button type="button">
            Reserve Rocket
          </button>
        </div>
      </li>
    </>
  );
}

SpaceLi.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

SpaceLi.defaultProps = {
  name: '',
  type: '',
  description: '',
  images: '',
};

export default SpaceLi;
