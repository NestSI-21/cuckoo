import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import addIcon from '../../assets/icons/add-icon.svg';
import {
  imageUpload,
  imageInnerWrapper,
  previewImagesEmptyContainer,
  previewImagesContainer,
  imageUploadButton,
} from './imageupload.module.scss';

const defaultMaxFileSize = 10485760;

const ImageUpload = ({ images, onChange, maxFileSize = defaultMaxFileSize }) => {
  const hiddenFileInput = useRef(null);
  const maxImages = 4;

  const addImageClick = () => {
    hiddenFileInput.current.click();
  };

  const removeImageClick = (imageName) => {
    const filteredImages = images.filter((image) => image !== imageName);
    onChange(filteredImages);
  };

  const handleChange = (event) => {
    const newImages = event.target.files;

    if (images.length + newImages.length > maxImages) {
      alert(`Only ${maxImages} images can be uploaded`);
      hiddenFileInput.current.value = null;
      return;
    }

    const acceptedImages = Array.from(newImages).filter((file) => file.size <= maxFileSize);

    const rejectedImagesNum = newImages.length - acceptedImages.length;
    if (rejectedImagesNum > 0) {
      alert(`${rejectedImagesNum} image(s) exceeded accepted file size (10mb)`);
    }

    const finalImages = [...images, ...acceptedImages];
    onChange(finalImages);
    hiddenFileInput.current.value = null;
  };

  const renderImages = (images) => {
    return images.map((image, i) => {
      return (
        <div className={imageInnerWrapper} key={i}>
          <img src={URL.createObjectURL(image)} alt='user upload' />
          <button
            onClick={() => {
              removeImageClick(image);
            }}
          ></button>
        </div>
      );
    });
  };

  return (
    <div className={imageUpload}>
      <div className={images.length <= 0 ? previewImagesEmptyContainer : previewImagesContainer}>
        {renderImages(images)}
        <button
          type='button'
          className={imageUploadButton}
          style={{ display: images.length < maxImages ? '' : 'none' }}
          onClick={addImageClick}
        >
          <img
            style={{ display: images >= 0 ? 'none' : 'inline-block' }}
            src={addIcon}
            alt='Upload images'
          />
          <div style={{ display: images >= 0 ? '' : 'none' }}>
            <img src={addIcon} alt='Upload images' />
            <p>Upload images (Max: {`${maxImages}`} images, 10MB)</p>
            <p>*only the first image will be displayed on Slack</p>
          </div>
          <input
            type='file'
            accept='image/*'
            ref={hiddenFileInput}
            onChange={handleChange}
            multiple
          />
        </button>
      </div>
    </div>
  );
};

ImageUpload.propTypes = {
  maxFileSize: PropTypes.number,
  images: PropTypes.array,
  onChange: PropTypes.func,
};

export default ImageUpload;
