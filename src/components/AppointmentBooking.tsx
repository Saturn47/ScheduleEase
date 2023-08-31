import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AppointmentBooking.css'; 

interface Slot {
  id: number;
  time: string;
  booked: boolean;
}

const slots: Slot[] = [
  { id: 1, time: '9 AM - 10 AM', booked: false },
  { id: 2, time: '2 PM - 3 PM', booked: false },
  { id: 3, time: '5 PM - 6 PM', booked: false },
  { id: 4, time: '8 PM - 9 PM', booked: false}
];

const AppointmentBooking: React.FC = () => {
  const [bookedSlot, setBookedSlot] = useState<number | null>(null);

  const handleBookSlot = (slotId: number) => {
    setBookedSlot(slotId);
    toast.success('Slot booked successfully!', { className: 'success-toast' });
  };

  const handleCancelBooking = () => {
    setBookedSlot(null);
    toast.error('Booking canceled.', { className: 'error-toast' });
  };

  return (
    <div className="appointment-container">
      <ToastContainer />
      <h2>Appointment Booking</h2>
      {bookedSlot !== null ? (
        <div className="booked-slot">
          <p>Booked Slot: {slots.find(slot => slot.id === bookedSlot)?.time}</p>
          <button className="cancel-button" onClick={handleCancelBooking}>Cancel Booking</button>
        </div>
      ) : (
        <div>
          <h3>Available Slots</h3>
          <ul className="slot-list">
            {slots.map(slot => (
              <li className="slot-item" key={slot.id}>
                {slot.time}{' '}
                {!slot.booked && <button onClick={() => handleBookSlot(slot.id)}>Book Slot</button>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;


