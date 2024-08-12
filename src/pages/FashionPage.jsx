import React from 'react';
import { Link } from 'react-router-dom';

const FashionPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Fashion</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/category/fashion/men">
            <div className="category-card">
              <img src="/images/men-fashion.jpg" alt="Men's Wear" className="img-fluid" />
              <h4>Men's Wear</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/fashion/women">
            <div className="category-card">
              <img src="/images/women-fashion.jpg" alt="Women's Wear" className="img-fluid" />
              <h4>Women's Wear</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/fashion/kids">
            <div className="category-card">
              <img src="/images/kids-fashion.jpg" alt="Kids' Wear" className="img-fluid" />
              <h4>Kids' Wear</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FashionPage;
