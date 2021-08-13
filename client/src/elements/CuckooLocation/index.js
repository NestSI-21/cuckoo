import React from 'react';
import PropTypes from 'prop-types';
import locationPin from '../../assets/icons/location-pin.svg';

const CuckooLocation = ({ location }) => {
  return (
    <>
      <img src={locationPin} alt='location' />
      <p>{location}</p>
    </>
  );
};

CuckooLocation.propTypes = {
  location: PropTypes.string,
};

export default CuckooLocation;
