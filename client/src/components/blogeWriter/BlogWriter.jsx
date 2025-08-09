import React from 'react';
import writerImg from '../../images/aniket3.png'; // use your image

const BlogWriter = () => {
  return (
    <div className="card shadow-sm p-2 mb-2" style={{ maxWidth: '300px', fontSize: '0.85rem' }}>
      <div className="d-flex align-items-center">
        <img
          src={writerImg}
          alt="Writer"
          className="rounded-circle me-2"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
        <div>
          <strong>Aniket Vishwakarma</strong>
          <div><small className="text-muted">Frontend Developer</small></div>
          <div><small className="text-muted">Aug 7, 2025</small></div>
        </div>
      </div>
    </div>
  );
};

export default BlogWriter;
