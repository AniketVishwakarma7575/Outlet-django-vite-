import React from 'react';
import './Card.css';
import aniketImg from '../../images/aniket1.jpg';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <Link
      to={'/detail'}
      className="card shadow-sm rounded-4 border-0 text-decoration-none"
      style={{ width: '20rem', overflow: 'hidden' }}
    >
      <img
        src={aniketImg}
        className="card-img-top"
        alt="Card thumbnail"
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary align-self-start mb-3 px-3 py-2 fs-6 rounded-pill">
          Frontend
        </span>

        <h5 className="card-title fw-semibold mb-3">
          Build a Shopping Cart With TypeScript, React and Supabase
        </h5>

        <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
          <div className="d-flex align-items-center">
            <img
              src={aniketImg}
              alt="Aniket"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px"
              }}
            />
            <small className="text-muted">Aniket Jack</small>
          </div>
          <small className="text-muted">13 November 2024</small>
        </div>
      </div>
    </Link>
  );
};

export default Card;
