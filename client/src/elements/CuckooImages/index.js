import React from 'react';
import PropTypes from 'prop-types';
import {
  imageGrid1,
  imageGrid2,
  imageGrid3,
  imageGrid4,
  imagePlaceHolder,
} from './cuckooimages.module.scss';

const CuckooImages = ({ images }) => {
  const imgCounter = images.length;
  return (
    <div
      className={
        imgCounter === 1
          ? imageGrid1
          : imgCounter === 2
          ? imageGrid2
          : imgCounter === 3
          ? imageGrid3
          : imgCounter === 4
          ? imageGrid4
          : null
      }
    >
      {images.map((image, i) => {
        console.log(image);
        return (
          <div className={imagePlaceHolder} key={i}>
            <img src={image} alt='' />
          </div>
        );
      })}
    </div>
  );
};

CuckooImages.propTypes = {
  images: PropTypes.array,
};

export default CuckooImages;
