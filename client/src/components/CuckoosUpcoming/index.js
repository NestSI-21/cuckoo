import React from 'react';
import PropTypes from 'prop-types';
import {
  upcoming,
  upcomingTitle,
  upcomingCard,
  upcomingDay,
  eventsScroll,
  upcomingDescription,
} from './cuckoosupcoming.module.scss';

const CuckoosUpcoming = ({ selectedCuckoo }) => {
  return (
    <div className={upcoming}>
      <h3 className={upcomingTitle}>Upcoming</h3>

      {selectedCuckoo.selectedDay ? (
        <div className={upcomingCard}>
          <div className={upcomingDay}>
            <h3>{selectedCuckoo.selectedDay ? selectedCuckoo.selectedDay.getDate() : ''}</h3>
            <p>
              {selectedCuckoo.selectedDay
                ? new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
                    selectedCuckoo.selectedDay,
                  )
                : ''}
            </p>
          </div>
          <div className={upcomingDescription}>
            <h4>Event Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      ) : (
        <>
          <div className={eventsScroll}>
            <p>This month:</p>
            <div className={upcomingCard}>
              <div className={upcomingDay}>
                <h3>8</h3>
                <p>Jul</p>
              </div>
              <div className={upcomingDescription}>
                <h4>Event Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className={upcomingCard}>
              <div className={upcomingDay}>
                <h3>12</h3>
                <p>Jul</p>
              </div>
              <div className={upcomingDescription}>
                <h4>Event Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className={upcomingCard}>
              <div className={upcomingDay}>
                <h3>28</h3>
                <p>Jul</p>
              </div>
              <div className={upcomingDescription}>
                <h4>Event Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
            <div className={upcomingCard}>
              <div className={upcomingDay}>
                <h3>31</h3>
                <p>Jul</p>
              </div>
              <div className={upcomingDescription}>
                <h4>Event Name</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
CuckoosUpcoming.propTypes = {
  selectedCuckoo: PropTypes.object,
};

export default CuckoosUpcoming;
