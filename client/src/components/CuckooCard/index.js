import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../elements/Avatar';
import Modal from '../Modal';
import CuckooAuthor from '../../elements/CuckooAuthor';
import CuckooDescription from '../../elements/CuckooDescription';
import CuckooImages from '../../elements/CuckooImages';
import CuckooLocation from '../../elements/CuckooLocation';
import CuckooDate from '../../elements/CuckooDate';
import CuckooTime from '../../elements/CuckooTime';
// import deleteBtn from '../../assets/icons/deleteBtn.svg';

import {
  cuckooCard,
  avatarContainer,
  titleSection,
  // deleteButton,
  authorWrapper,
  detailsWrapper,
} from './cuckoocard.module.scss';

const CuckooCard = ({
  cuckoo: {
    title,
    created_at: createdAt,
    description,
    images_url: images,
    location,
    start_date: startDate,
    end_date: endDate,
    start_time: startTime,
    end_time: endTime,
    type: { name: cuckooType },
    user: {
      name: username,
      image_url: userImage,
      company: { name: companyName },
    },
  },
}) => {
  return (
    <div className={cuckooCard}>
      <div className={avatarContainer}>
        <Avatar userImage={userImage} />
      </div>
      <div>
        <div>
          <div className={titleSection}>
            <h3>{title} </h3>

            {/* <button className={deleteButton} onClick={cuckooDelete}>
              <img src={deleteBtn} />
            </button>
            {confirmDelete ? <Modal /> : null} */}
          </div>
        </div>
        <p className={authorWrapper}>
          <CuckooAuthor
            type={cuckooType}
            username={username}
            companyName={companyName}
            createdAt={createdAt}
          />
        </p>
        <CuckooDescription description={description} />
        <CuckooImages images={images} />
        <div className={detailsWrapper}>
          {location ? <CuckooLocation location={location} /> : null}
          {startDate || endDate ? <CuckooDate startDate={startDate} endDate={endDate} /> : null}
          {startTime || endTime ? <CuckooTime startTime={startTime} endTime={endTime} /> : null}
        </div>
      </div>
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
