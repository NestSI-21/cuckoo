import React from 'react';
import PropTypes from 'prop-types';
import locationPin from '../../assets/icons/location-pin.svg';
import clock from '../../assets/icons/clock.svg';
import { card, detailsWrapper } from '../CuckooCard/cuckoocard.module.scss';

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
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>
        @{username}, {company} • {datePosted}
      </p>
      <p>{description}</p>
      <div className={detailsWrapper}>
        {location ? (
          <>
            <img src={locationPin} alt='location' />
            <p>{location}</p>
          </>
        ) : null}
        {startDate || endDate || startTime || endTime ? (
          <>
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
          </>
        ) : null}
      </div>
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
