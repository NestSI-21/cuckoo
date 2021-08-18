import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  upcoming,
  upcomingTitle,
  upcomingCard,
  upcomingDay,
  eventsScroll,
  upcomingDescription,
} from './cuckoosupcoming.module.scss';

const CuckoosUpcoming = ({ cuckoos }) => {
  return (
    <div className={upcoming}>
      <h3 className={upcomingTitle}>Upcoming</h3>
      <p>This month:</p>
      <div className={eventsScroll}>
        {cuckoos
          .sort((a, b) => new Date(a.start_date) - new Date(b.start_date))
          .map((cuckoo, i) => (
            <div className={upcomingCard} key={i}>
              <div className={upcomingDay}>
                <h3>{format(new Date(cuckoo.start_date), 'dd')}</h3>
                <p>{format(new Date(cuckoo.start_date), 'MMM')}</p>
              </div>
              <div className={upcomingDescription}>
                <h4>{cuckoo.title}</h4>
                <p>{cuckoo.description.slice(0, 75)}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
CuckoosUpcoming.propTypes = {
  cuckoos: PropTypes.array,
  selectedCuckoo: PropTypes.object,
};

export default CuckoosUpcoming;
