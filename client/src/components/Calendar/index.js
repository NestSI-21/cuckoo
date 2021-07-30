import React, { useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import CuckoosUpcoming from '../CuckoosUpcoming';
import { calendar, container } from './calendar.module.scss';

const Calendar = () => {
  const [selectedCuckoo, setSelectedCuckoo] = useState({ selectedDay: null });

  const handleCuckooClick = (day, { selected }) => {
    setSelectedCuckoo({ selectedDay: selected ? undefined : day });
  };

  const modifiers = {
    events: [
      new Date(2021, 6, 8),
      new Date(2021, 6, 12),
      new Date(2021, 6, 28),
      new Date(2021, 6, 31),
    ],
  };

  return (
    <div className={container}>
      <Helmet>
        <style>{`
          .DayPicker-Day{
            pointer-events: none;
            box-sizing: border-box;
            padding:0.5rem;
            border-radius:0.5rem;
          }
          .DayPicker-Day--today {
            border:1px solid #21c49c;
            font-weight:lighter;
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
