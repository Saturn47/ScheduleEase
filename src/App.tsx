import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Calendar from './components/Calendar';
import AppointmentBooking from './components/AppointmentBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/calendar" element = {<Calendar/>} />
        <Route path="/booking/:eventId" element={<AppointmentBooking/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

