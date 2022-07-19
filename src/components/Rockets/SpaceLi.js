import React from 'react';
import PropTypes from 'prop-types';

function SpaceLi(props) {
  const {
    type, description, images, name,
  } = props;
  return (
    <>
      <li>
        <img src={images} alt={name} />
        <div>
          <button type="button">Reserved</button>
          <h2>{type}</h2>
          <p>{description}</p>
          <button type="button">
            Cancel Resevation
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
