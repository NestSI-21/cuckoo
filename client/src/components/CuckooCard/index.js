import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../elements/Avatar';
import CuckooAuthor from '../../elements/CuckooAuthor';
import CuckooDescription from '../../elements/CuckooDescription';
import CuckooImages from '../../elements/CuckooImages';
import CuckooLocation from '../../elements/CuckooLocation';
import CuckooDate from '../../elements/CuckooDate';
import CuckooTime from '../../elements/CuckooTime';
import dog from '../../assets/icons/dog.jpeg';
import deleteBtn from '../../assets/icons/deleteBtn.svg';
import {
  cuckooCard,
  titleSection,
  deleteButton,
  authorWrapper,
  detailsWrapper,
} from './cuckoocard.module.scss';

const CuckooCard = ({
  cuckoo: {
    type_id,
    title,
    user_id,
    company,
    created_at,
    description,
    location,
    start_date,
    end_date,
    start_time,
    end_time,
  },
}) => {
  return (
    <div className={cuckooCard}>
      <div className={titleSection}>
        <h3>{title} </h3>
        <div className={deleteButton}>
          <img src={deleteBtn} />
        </div>
        <p className={authorWrapper}>
          <Avatar userImage={dog} />
          <CuckooAuthor
            type={type_id}
            username={user_id}
            company={company}
            createdAt={created_at}
          />
        </p>
        <CuckooDescription description={description} />
        <CuckooImages image={dog} />
        <div className={detailsWrapper}>
          {location ? <CuckooLocation location={location} /> : null}
          {start_date || end_date ? <CuckooDate startDate={start_date} endDate={end_date} /> : null}
          {start_time || end_time ? <CuckooTime startTime={start_time} endTime={end_time} /> : null}
        </div>
      </div>
    </div>
  );
};

CuckooCard.propTypes = {
  cuckoo: PropTypes.object.isRequired,
};

export default CuckooCard;
