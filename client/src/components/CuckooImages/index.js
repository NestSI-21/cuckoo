import React from 'react';
import PropTypes from 'prop-types';
import dog from '../../assets/icons/dog.jpeg';
import { imageGrid } from './cuckooimages.module.scss';

const CuckooImages = () => {
  return (
    <div className={imageGrid}>
      <img src={dog} alt='' />
    </div>
  );
};

CuckooImages.propTypes = {
  image: PropTypes.string,
};

export default CuckooImages;
