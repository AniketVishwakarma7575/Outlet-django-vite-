import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Login.jsx (simplified)
import axios from 'axios';
import { useState } from 'react';

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', {
        email, password,
      });
      localStorage.setItem('token', res.data.token);
      console.log('user', res.data.user);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-success">Login</h3>
        <form onSubmit={handleLogin} >
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success">Login</button>
          </div>

          <p className="mt-3 text-center">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
