import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventClickArg } from '@fullcalendar/core';
import './Calendar.css';

interface EventData {
  id: string;
  title: string;
  start: string;
  end: string;
  availableSlots: number;
}

const generateRandomEvents = () => {
  const events = [];
  const today = new Date();
  const numEvents = 5; // Number of random events
  for (let i = 0; i < numEvents; i++) {
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + i);
    startDate.setHours(9 + i); // Start time: 9 AM, 10 AM, ...
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // End time: 10 AM, 11 AM, ...

    // Generate a random number of available slots (between 1 and 5)
    const availableSlots = Math.floor(Math.random() * 5) + 1;

    events.push({
      id: `${i + 1}`,
      title: `Event ${i + 1}`,
      start: startDate.toISOString(),
      end: endDate.toISOString(),
      availableSlots,
    });
  }
  return events;
};

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    // Generate random events with available slots
    const randomEvents = generateRandomEvents();
    setEvents(randomEvents);
  }, []);

  const handleEventClick = (eventClickInfo: EventClickArg) => {
    // Do something when an event is clicked
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-title">Available Dates</h2>
      <div className="calendar-wrapper">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick}
          height="auto" // Set height to auto for responsive behavior
          themeSystem="bootstrap"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          eventContent={({ event }) => (
            <div>
              <p>Event ID: {event.id}</p>
              <Link to={`/booking/${event.id}`}>
                Book
              </Link>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default Calendar;


