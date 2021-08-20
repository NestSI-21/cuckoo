import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  imageGrid1,
  imageGrid2,
  imageGrid3,
  imageGrid4,
  imagePlaceHolder,
  imagePlaceHolderZoomed,
} from './cuckooimages.module.scss';

const CuckooImages = ({ images }) => {
  const [imgZoom, setImgZoom] = useState({
    id: 0,
    zoom: false,
  });
  const openModal = (index) => (e) => {
    setImgZoom({ ...imgZoom, id: index, zoom: !imgZoom.zoom });
  };
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
        return (
          <div
            c
            className={imgZoom.zoom && imgZoom.id === i ? imagePlaceHolderZoomed : imagePlaceHolder}
            key={i}
            onClick={openModal(i)}
          >
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
