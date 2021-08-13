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
  const [modifiers, setModifiers] = useState([]);
  //const [selectedCuckoo, setSelectedCuckoo] = useState({ selectedDay: null });
  const [interval, setInterval] = useState({
    start: new Date(new Date().setHours(0)),
    end: new Date(new Date().setHours(23, 59)),
    isMonth: false,
  });

  const handleCuckooClick = (day) => {
    setInterval({
      start: new Date(day.setHours(0)),
      end: new Date(day.setHours(23, 59, 59)),
      isMonth: false,
    });

    //setSelectedCuckoo({ selectedDay: selected ? undefined : day });
  };

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

  console.log(interval);

  const handleMonthChange = (date) => {
    date.setDate(1);
    date.setHours(0, 0, 0);
    const startDate = new Date(date);
    date.setHours(23, 59, 59);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    const endDate = new Date(date);

    setInterval({
      start: startDate,
      end: endDate,
      isMonth: true,
    });
  };

  const showCalendarDates = (cuckoos) => {
    let selectableDates = cuckoos.map(({ start_date, end_date }) => ({
      from: new Date(start_date),
      to: new Date(end_date),
    }));
    setModifiers(selectableDates);
  };

  console.log(cuckoos);
  console.log(modifiers);
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
        selectedDays={interval.isMonth ? null : interval.start}
        month={interval.start}
        onDayClick={handleCuckooClick}
        onMonthChange={handleMonthChange}
        modifiers={{ events: modifiers }}
      />
      <CuckoosUpcoming
        cuckoos={cuckoos.filter(
          (cuckoo) =>
            new Date(cuckoo.start_date) <= interval.end &&
            interval.start <= new Date(cuckoo.end_date),
        )}
      />
    </div>
  );
};

export default Calendar;
