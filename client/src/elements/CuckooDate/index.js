import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import calendar from '../../assets/icons/calendar.svg';

const CuckooDate = ({ startDate, endDate }) => {
  return (
    <>
      {startDate || endDate ? <img src={calendar} alt='date' /> : null}
      <p>
        {startDate ? format(new Date(startDate), 'dd MMM') : null}
        {endDate &&
        new Date(startDate).setHours(0, 0, 0, 0) !== new Date(endDate).setHours(0, 0, 0, 0)
          ? ' - ' + format(new Date(endDate), 'dd MMM')
          : null}
      </p>
    </>
  );
};

CuckooDate.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default CuckooDate;
