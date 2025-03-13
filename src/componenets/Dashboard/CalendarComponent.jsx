import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css"; // Import custom styles
import { FaCalendarAlt } from "react-icons/fa";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <FaCalendarAlt className="calendar-icon" />
        <h3>Calendar</h3>
      </div>
      <h4>Events</h4>
      <Calendar
        onChange={setDate}
        value={date}
        className="custom-calendar"
      />
    </div>
  );
};

export default CalendarComponent;
