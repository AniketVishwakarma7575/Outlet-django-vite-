import React from 'react';

import banner from './../images/aniket.jpg';
import BlogWriter from '../components/blogeWriter/BlogWriter';

const DetailsPage = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
       
        <div className="col-md-6 text-center">
          <img
            src={banner}
            alt="Product"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
            <BlogWriter/>
          <h2 className="mb-3">Awesome Product Name</h2>
          <div className="mb-2">
            <span className="text-warning me-1">★ ★ ★ ★ ☆</span>
            <small className="text-muted">(234 Reviews)</small>
          </div>
          <h4 className="text-success mt-3 mb-3">$129.99</h4>

          <p className="text-muted">
            This is a high-quality product crafted with care and precision. Ideal for modern-day use, it combines both style and functionality.
          </p>

          <ul>
            <li>Durable Material</li>
            <li>1-Year Warranty</li>
            <li>Free Shipping</li>
          </ul>

          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline-success">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
