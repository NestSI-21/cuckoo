import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import calendar from '../../assets/icons/calendar.svg';

const CuckooDate = ({ startDate, endDate }) => {
  return (
    <>
      {/* set hours 0 */}
      {startDate || endDate ? <img src={calendar} alt='time' /> : null}
      <p>
        {startDate ? format(new Date(startDate), 'dd MMM') : null}
        {startDate === endDate ? null : startDate && endDate ? ' - ' : null}
        {endDate ? format(new Date(endDate), 'dd MMM') : null}
      </p>
    </>
  );
};

CuckooDate.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default CuckooDate;
