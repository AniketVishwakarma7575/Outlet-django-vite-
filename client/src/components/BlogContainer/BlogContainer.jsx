import React from 'react';
import Card from '../blogCard/Card'; // ✅ Fixed: use import, not require

const BlogContainer = () => {
  return (
    <div className="container py-4">
      <div className="row g-4">
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
        <div className="col-md-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
