import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import apiConfig from '../../helpers/Networking';
import CuckoosUpcoming from '../CuckoosUpcoming';
import { calendar, container } from './calendar.module.scss';

const Calendar = () => {
  const [cuckoos, setCuckoos] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [interval, setInterval] = useState(() => {
    let startDate = new Date();
    let endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0);
    endDate.setHours(23, 59);
    return {
      start: startDate,
      end: endDate,
      isMonth: true,
    };
  });

  const handleCuckooClick = (day) => {
    setInterval({
      start: new Date(day.setHours(0)),
      end: new Date(day.setHours(23, 59, 59)),
      isMonth: false,
    });
  };

  useEffect(() => {
    getCuckoos();
  }, []);

  useEffect(() => {
    showCalendarDates(cuckoos);
  }, [cuckoos]);

  const getCuckoos = () => {
    apiConfig.get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

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

  return (
    <div className={container}>
      <Helmet>
        <style>{`
          .DayPicker-Month{
            width:100%;
            border-collapse: separate;
          }
          .DayPicker-Body{
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
            border: 2px solid white;
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
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
            background: #21c49c;
            opacity: 0.5;
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
            background: #21c49c;
          }
          .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
            background: #21c49c;
            opacity: 0.75;
          }
          `}</style>
      </Helmet>
      <DayPicker
        className={calendar}
        showOutsideDays
        month={interval.start}
        onDayClick={handleCuckooClick}
        onMonthChange={handleMonthChange}
        modifiers={{ events: modifiers }}
        selectedDays={interval.isMonth ? null : interval.start}
      />
      <CuckoosUpcoming
        cuckoos={(cuckoos || []).filter(
          (cuckoo) =>
            new Date(cuckoo.start_date) <= interval.end &&
            interval.start <= new Date(cuckoo.end_date),
        )}
      />
    </div>
  );
};

export default Calendar;
