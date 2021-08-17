import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import clock from '../../assets/icons/clock.svg';

const CuckooTime = ({ startTime, endTime }) => {
  return (
    <>
      {!(new Date(startTime).getHours() == 0 && new Date(startTime).getMinutes() == 0) ||
      !(new Date(endTime).getHours() == 0 && new Date(endTime).getMinutes() == 0) ? (
        <img src={clock} alt='time' />
      ) : null}
      <p>
        {startTime &&
        !(new Date(startTime).getHours() == 0 && new Date(startTime).getMinutes() == 0)
          ? format(new Date(startTime), 'HH:mm')
          : null}
        {endTime &&
        !(new Date(endTime).getHours() == 0 && new Date(endTime).getMinutes() == 0) &&
        new Date(startTime).setFullYear(0, 0, 0) !== new Date(endTime).setFullYear(0, 0, 0)
          ? ' - ' + format(new Date(endTime), 'HH:mm')
          : null}
      </p>
    </>
  );
};

CuckooTime.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

export default CuckooTime;

// !(new Date(endTime).getHours() == 0 && new Date(endTime).getMinutes() == 0);
