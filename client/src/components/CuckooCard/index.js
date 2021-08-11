import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../elements/Avatar';
import Modal from '../Modal';
import CuckooImages from '../CuckooImages';
import locationPin from '../../assets/icons/location-pin.svg';
import deleteBtn from '../../assets/icons/deleteBtn.svg';
import clock from '../../assets/icons/clock.svg';
import dog from '../../assets/icons/dog.jpeg';
import {
  cuckooCard,
  avatarContainer,
  titleSection,
  deleteButton,
  author,
  seeMore,
  detailsWrapper,
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
  const [confirmDelete, setConfirmDelete] = useState(false);
  const cuckooDelete = () => {
    setConfirmDelete(!confirmDelete);
    console.log(confirmDelete);
  };

  const [isPreview, setIsPreview] = useState(true);
  const maxPreview = 160;
  const cuckooDescription = isPreview ? description.slice(0, maxPreview) : description;

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <div className={cuckooCard}>
      <div className={avatarContainer}>
        <Avatar userImage={dog} />
      </div>

      <div>
        <div>
          <div className={titleSection}>
            <h3>{title} </h3>

            <button className={deleteButton} onClick={cuckooDelete}>
              <img src={deleteBtn} />
            </button>
            {confirmDelete ? <Modal /> : null}
          </div>
        </div>
        <p className={author}>
          <Avatar userImage={dog} />
          <span>
            @{username}, {company} • {datePosted} • {type}
          </span>
        </p>

        <p>{cuckooDescription}</p>
        {description.length >= maxPreview ? (
          <span className={seeMore} onClick={togglePreview}>
            {isPreview ? 'see more' : 'see less'}
          </span>
        ) : null}
        <CuckooImages image={dog} />
        {location || startDate || endDate || startTime || endTime ? (
          <div className={detailsWrapper}>
            {location ? (
              <div>
                <img src={locationPin} alt='location' />
                <p>{location}</p>
              </div>
            ) : null}
            {startDate || endDate || startTime || endTime ? (
              <div>
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
