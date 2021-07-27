import React, { useState, useRef } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
// import placeholderIcon from '../../assets/icons/placeholder_icon.svg';
import {
  imageUpload,
  imageInnerWrapper,
  previewImagesEmptyContainer,
  previewImagesContainer,
  imageUploadButton,
} from './imageupload.module.scss';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const hiddenFileInput = useRef(null);
  const maxImages = 4;

  const addImageClick = () => {
    hiddenFileInput.current.click();
  };

  const removeImageClick = (imageName) => {
    setSelectedImages((previousImages) => previousImages.filter((image) => image !== imageName));
  };

  const handleChange = (event) => {
    const maxFileSize = 10485760;
    const newImages = event.target.files;

    if (selectedImages.length + newImages.length > maxImages) {
      alert(`Only ${maxImages} images can be uploaded`);
    } else {
      const acceptedImages = Array.from(newImages)
        .filter((file) => file.size <= maxFileSize)
        .map((file) => URL.createObjectURL(file));

      const rejectedImagesNum = newImages.length - acceptedImages.length;
      if (rejectedImagesNum > 0) {
        alert(`${rejectedImagesNum} image(s) exceeded accepted file size (10mb)`);
      }

      setSelectedImages((previousImages) => [...previousImages, ...acceptedImages]);
    }
    hiddenFileInput.current.value = null;
  };

  const renderImages = (images) => {
    return images.map((image) => {
      return (
        <div className={imageInnerWrapper} key={image}>
          <img src={image} alt='user upload' />
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
      <div
        className={
          selectedImages.length <= 0 ? previewImagesEmptyContainer : previewImagesContainer
        }
      >
        {renderImages(selectedImages)}
        <button
          type='button'
          className={imageUploadButton}
          style={{ display: selectedImages.length < maxImages ? '' : 'none' }}
          onClick={addImageClick}
        >
          <img
            style={{
              display: selectedImages >= 0 ? '' : 'inline-block',
            }}
            src={plusIcon}
            alt='Add Photos Button'
          />

          {/* <img
            style={{
              display: selectedImages >= 0 ? '' : 'none',
            }}
            src={placeholderIcon}
            alt='Add Photos Button'
          /> */}
          <p
            style={{
              display: selectedImages >= 0 ? '' : 'none',
            }}
          >
            Upload images
          </p>
          <p
            style={{
              display: selectedImages >= 0 ? '' : 'none',
            }}
          >
            Max upload: 4 images. Max file size: 10MB.
          </p>
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

export default ImageUpload;
