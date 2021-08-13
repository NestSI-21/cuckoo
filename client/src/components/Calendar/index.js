import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { get } from '../../helpers/Networking';
import CuckoosUpcoming from '../CuckoosUpcoming';
import { calendar, container } from './calendar.module.scss';

const Calendar = () => {
  const [cuckoos, setCuckoos] = useState([]);
  const [modifiers, setModifiers] = useState({ events: [] });
  const [selectedCuckoo, setSelectedCuckoo] = useState({ selectedDay: null });

  const handleCuckooClick = (day, { selected }) => {
    setSelectedCuckoo({ selectedDay: selected ? undefined : day });
  };

  console.log(cuckoos);
  console.log(modifiers);

  useEffect(() => {
    getCuckoos();
  }, []);

  useEffect(() => {
    showCalendarDates(cuckoos);
  }, [cuckoos]);

  const getCuckoos = () => {
    get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

  const showCalendarDates = (cuckoos) => {
    cuckoos.map(({ start_date }) =>
      setModifiers((prevData) => ({
        ...prevData,
        events: [...prevData.events, new Date(start_date)],
      })),
    );
  };

  // const modifiers = ({
  //   events: [
  //     new Date(2021, 7, 8),
  //     new Date(2021, 7, 12),
  //     new Date(2021, 7, 28),
  //     new Date(2021, 7, 31),
  //   ],
  // });

  return (
    <div className={container}>
      <Helmet>
        <style>{`
          .DayPicker-Month{
            width:100%;
          }
          .DayPicker-Caption{
            color: #21c49c;
            font-weight:400;
            font-size: 20px;
          }
          .DayPicker-Day{
            pointer-events: none;
            box-sizing: border-box;
            padding:0.5rem;
            border-radius:0.5rem;
          }
          .DayPicker-Day--today {
            color: #21c49c;
          }
          .DayPicker-Day--events {
            color: white;
            background-color: #21c49c;
            cursor: pointer;
            pointer-events: auto;
          }
          .DayPicker-Day:hover {
            opacity: 0.75;
          }
          `}</style>
      </Helmet>
      <DayPicker
        className={calendar}
        showOutsideDays
        selectedDays={selectedCuckoo.selectedDay}
        onDayClick={handleCuckooClick}
        modifiers={modifiers}
      />
      <CuckoosUpcoming selectedCuckoo={selectedCuckoo} />
    </div>
  );
};

export default Calendar;
