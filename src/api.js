import axios from 'axios';

const API_URL = 'https://scheduleease-backend-server.onrender.com/';

export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/auth/register`, { name, email, password });
  return response.data;
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAvailableDates = async () => {
  try {
    const response = await axios.get(`${API_URL}/dates`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchTimeSlots = async (date) => {
  try {
    const response = await axios.get(`${API_URL}/timeSlots/${date}`); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bookAppointment = async (date, time) => {
  try {
    const response = await axios.post(`${API_URL}/bookAppointment`, { date, time }); // Replace with your API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};

