import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPages.css'; 

function ErrorPages() {
  return (
    <div className="error-container">
      <h1 className="error-heading">Oops! Page Not Found (404)</h1>
      <p className="error-text">The page you are looking for does not exist.</p>
      <Link to="/home" className="error-link">Go back to Home</Link>
    </div>
  );
}

export default ErrorPages;
