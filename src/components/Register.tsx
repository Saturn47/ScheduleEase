import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      if (response.status === 201) {
        console.log('Registration successful');
        navigate('/');
        // You can add navigation or display a success message here
      } else {
        console.error('Registration failed');
        // Handle error or display error message
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='Container'>
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <div>
          <label htmlFor='name'>Name</label>
          <input id = 'name' name = 'name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input id = 'email' name = 'email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id = 'password' name = 'password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default Register;

