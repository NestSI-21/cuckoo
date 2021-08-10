import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import clock from '../../assets/icons/clock.svg';

const CuckooTime = ({ startTime, endTime }) => {
  return (
    <>
      {startTime || endTime ? <img src={clock} alt='time' /> : null}
      <p>
        {startTime ? format(new Date(startTime), 'HH:mm') : null}
        {startTime && endTime ? ' - ' : null}
        {endTime ? format(new Date(endTime), 'HH:mm') : null}
      </p>
    </>
  );
};

CuckooTime.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

export default CuckooTime;
