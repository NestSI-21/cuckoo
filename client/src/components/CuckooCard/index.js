import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../elements/Avatar';
import CuckooImages from '../CuckooImages';
import locationPin from '../../assets/icons/location-pin.svg';
import clock from '../../assets/icons/clock.svg';
import dog from '../../assets/icons/dog.jpeg';
import {
  cuckooCard,
  cuckooAuthor,
  cuckooType,
  detailsWrapper,
  cuckooDesc,
  cuckooExpand,
  cuckooLocation,
  cuckooTime,
} from './cuckoocard.module.scss';

const CuckooCard = ({
  cuckoo: {
    type,
    title,
    username,
    company,
    datePosted,
    description,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
  },
}) => {
  const [isPreview, setIsPreview] = useState(true);

  const maxPreview = 160;
  const cuckooDescription = isPreview ? description.slice(0, maxPreview) : description;

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div className={cuckooCard}>
      <Avatar userImage={dog} />
      <div>
        <h3>{title}</h3>
        <p className={cuckooAuthor}>
          <span className={cuckooType}>{type}</span> • @{username}, {company} • {datePosted}
        </p>
        <p className={cuckooDesc}>{cuckooDescription}</p>
        {description.length >= maxPreview ? (
          <span className={cuckooExpand} onClick={togglePreview}>
            {isPreview ? 'see more' : 'see less'}
          </span>
        ) : null}
        <CuckooImages image={dog} />
        {location || startDate || endDate || startTime || endTime ? (
          <div className={detailsWrapper}>
            {location ? (
              <div className={cuckooLocation}>
                <img src={locationPin} alt='location' />
                <p>{location}</p>
              </div>
            ) : null}
            {startDate || endDate || startTime || endTime ? (
              <div className={cuckooTime}>
                <img src={clock} alt='time' />
                <p>
                  {startDate ? startDate : null}
                  {startDate && endDate ? ' - ' : null}
                  {endDate ? endDate : null}
                  {(startDate || endDate) && (startTime || endTime) ? ' • ' : null}
                  {startTime ? startTime : null}
                  {startTime && endTime ? ' - ' : null}
                  {endTime ? endTime : null}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
