import React from 'react';
import PropTypes from 'prop-types';
//import dog from '../../assets/icons/dog.jpeg';
import {
  imageGrid1,
  imageGrid2,
  imageGrid3,
  imageGrid4,
  imagePlaceHolder,
} from './cuckooimages.module.scss';

const CuckooImages = () => {
  const imgSrc = [
    {
      id: '1',
      src: 'https://picsum.photos/id/420/600/400',
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/320/600/400',
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/520/600/400',
    },
    // {
    //   id: '4',
    //   src: 'https://picsum.photos/id/620/600/400',
    // },
  ];
  const imgCounter = imgSrc.length;
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
      {imgSrc.map((cuckooImage) => {
        return (
          <div className={imagePlaceHolder} key={cuckooImage.id}>
            <img src={cuckooImage.src} alt='' />
          </div>
        );
      })}
    </div>
  );
};

CuckooImages.propTypes = {
  image: PropTypes.string,
};

export default CuckooImages;
