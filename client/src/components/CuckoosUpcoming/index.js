import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  upcoming,
  upcomingTitle,
  upcomingCard,
  upcomingDay,
  //eventsScroll,
  upcomingDescription,
} from './cuckoosupcoming.module.scss';

const CuckoosUpcoming = ({ cuckoos, selectedCuckoo }) => {
  console.log(selectedCuckoo);
  console.log(cuckoos);

  useEffect(() => {
    getCuckooInfo();
  }, [selectedCuckoo]);

  const getCuckooInfo = () => {
    //const cuckooInfo = cuckoos.filter((cuckoo) => new Date(cuckoo.start_date) == selectedCuckoo);
    const test = cuckoos.map((cuckoo) => new Date(cuckoo.start_date));
    console.log(test);
    //console.log(cuckooInfo);
  };
  return (
    <div className={upcoming}>
      <h3 className={upcomingTitle}>Upcoming</h3>

      {/* //cuckoo stuff */}
      {cuckoos.map((_, i) => (
        <div className={upcomingCard} key={i}>
          <div className={upcomingDay}></div>
          <div className={upcomingDescription}>
            <h4>Event Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
      ))}
      {/* {selectedCuckoo.selectedDay ? ( 
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
      )*/}
    </div>
  );
};
CuckoosUpcoming.propTypes = {
  cuckoos: PropTypes.array,
  selectedCuckoo: PropTypes.object,
};

export default CuckoosUpcoming;
