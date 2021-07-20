import React from 'react';
import PropTypes from 'prop-types';
import locationPin from '../../assets/icons/location-pin.svg';
import clock from '../../assets/icons/clock.svg';
import {
  card,
  detailsWrapper,
  cardHeading,
  cardDescription,
  cardLocation,
  cardTime,
} from '../CuckooCard/cuckoocard.module.scss';

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
  return (
    <div className={card}>
      <div className={cardHeading}>
        <h3>{title}</h3>
        <p>{type}</p>
      </div>
      <p className='annotation'>
        @{username}, {company} • {datePosted}
      </p>
      <p className={cardDescription}>{description}</p>
      <div className={detailsWrapper}>
        {location ? (
          <div className={cardLocation}>
            <img src={locationPin} alt='location' />
            <p>{location}</p>
          </div>
        ) : null}
        {startDate || endDate || startTime || endTime ? (
          <div className={cardTime}>
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
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
