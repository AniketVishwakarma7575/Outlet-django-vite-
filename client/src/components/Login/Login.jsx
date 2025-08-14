import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Login.jsx (simplified)
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authprovider/AuthProvider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Login = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})
  const {isLoggdIn, setIsLoggedIn} = useContext(AuthContext)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)

    const userData = { username, password }
    console.log("user data is here", userData);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.access)
      localStorage.setItem("refreshToken", response.data.refresh)
      console.log("login successful !")
      setIsLoggedIn(true)
      navigate('/')

    } catch (err) {
      setErrors(err.response.data);
      console.error("invalid credentials", err.response.data);
      console.log("invalid credentials")

    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4 text-success">Login</h3>
        <form onSubmit={handleLogin} >
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} required />
          
          {errors.username && (
              <small className="text-danger">
                {errors.username}
              </small>
            )}</div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          {errors.password && (
              <small className="text-danger">
                {errors.password}
              </small>
            )}</div>

          {/* {errors && (
            <small className="text-danger">
              {error}
            </small>
          )} */}

          <div className="d-grid">
            {loading ? (
              <button type="submit" className="btn btn-success" disabled><FontAwesomeIcon icon={faSpinner} spin />Plese wite...</button>
            ) : (
              <button type="submit" className="btn btn-success">Login</button>
            )}
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
