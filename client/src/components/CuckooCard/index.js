import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../elements/Avatar';
import CuckooAuthor from '../../elements/CuckooAuthor';
import CuckooDescription from '../../elements/CuckooDescription';
import CuckooImages from '../../elements/CuckooImages';
import CuckooLocation from '../../elements/CuckooLocation';
import CuckooDate from '../../elements/CuckooDate';
import CuckooTime from '../../elements/CuckooTime';

import {
  cuckooCard,
  avatarContainer,
  titleSection,
  authorWrapper,
  detailsWrapper,
  cuckooDetail,
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
          <div className={cuckooDetail}>
            {location ? <CuckooLocation location={location} /> : null}
          </div>
          <div className={cuckooDetail}>
            {startDate || endDate ? <CuckooDate startDate={startDate} endDate={endDate} /> : null}
          </div>
          <div className={cuckooDetail}>
            {startDate || endDate ? <CuckooTime startTime={startDate} endTime={endDate} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
