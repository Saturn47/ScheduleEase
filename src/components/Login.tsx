import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [otpRequested, setOtpRequested] = useState(false); // Track whether OTP is requested
  const navigate = useNavigate();
  const API_URL = 'https://scheduleease-backend-server.onrender.com';

  const handleRequestOTP = async () => {
    try {
      const response = await axios.post(`${API_URL}/request-otp`, { email });
      if (response.status === 200) {
        toast.success('OTP sent to your email'); // Show success toast
        setOtpRequested(true); // OTP requested, show OTP input field
      } else {
        toast.error('OTP request failed'); // Show error toast
      }
    } catch (error) {
      toast.error('OTP request error:');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, otp });
      if (response.status === 200) {
        toast.success('Login successful'); // Show success toast
        navigate('/calendar');
      } else {
        toast.error('Login failed'); // Show error toast
      }
    } catch (error) {
      toast.error('Login error:');
    }
  };

  return (
    <div className='Container'>
      <ToastContainer /> {/* Initialize ToastContainer */}
      <h1>Welcome to ScheduleEase!!</h1>
      <h2>Login into your account</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {otpRequested ? (
          <div>
            <label htmlFor='otp'>OTP</label>
            <input
              id='otp'
              name='otp'
              type='text'
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>
        ) : null}
        {otpRequested ? (
          <button type='button' onClick={handleLogin}>
            Login with OTP
          </button>
        ) : (
          <button type='button' onClick={handleRequestOTP}>
            Request OTP
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;

