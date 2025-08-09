import React from 'react';
import pic from '../../images/aniket1.png'; // replace with your actual path

const CardFooter = () => {
  return (
    <div className="d-flex align-items-center gap-3 mt-3" style={{padding:4}}>
      <div
        className="rounded-circle overflow-hidden"
        style={{ width: '30px', height: '40px' }}
      >
        <img
          src={pic}
          alt="user"
          className="img-fluid rounded-circle w-100 h-100 object-fit-cover"
        />
      </div>

      <span className="text-muted fw-semibold small">
        Aniket Vishwakarma
      </span>

      <small className="text-muted fw-semibold ms-3">
        Aug 5, 2025
      </small>
    </div>
  );
};

export default CardFooter;
