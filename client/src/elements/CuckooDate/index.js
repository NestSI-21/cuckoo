import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import clock from '../../assets/icons/clock.svg';

const CuckooDate = ({ startDate, endDate }) => {
  return (
    <>
      {startDate || endDate ? <img src={clock} alt='time' /> : null}
      <p>
        {startDate ? format(new Date(startDate), 'dd MMM yyyy') : null}
        {startDate && endDate ? ' - ' : null}
        {endDate ? format(new Date(endDate), 'dd MMM yyyy') : null}
      </p>
    </>
  );
};

CuckooDate.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

export default CuckooDate;
