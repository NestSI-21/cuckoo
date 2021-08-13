import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { seeMore } from './cuckoodescription.module.scss';

const CuckooDescription = ({ description }) => {
  const [isPreview, setIsPreview] = useState(true);

  const maxPreview = 160;
  const cuckooDescription = isPreview ? description.slice(0, maxPreview) : description;

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <>
      <p>{cuckooDescription}</p>
      {description.length >= maxPreview ? (
        <span className={seeMore} onClick={togglePreview}>
          {isPreview ? 'see more' : 'see less'}
        </span>
      ) : null}
    </>
  );
};

CuckooDescription.propTypes = {
  description: PropTypes.string,
};

export default CuckooDescription;
