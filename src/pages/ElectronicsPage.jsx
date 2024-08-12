import React from 'react';
import { Link } from 'react-router-dom';

const ElectronicsPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Electronics</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/category/electronics/phones">
            <div className="category-card">
              <img src="/images/phones.jpg" alt="Phones" className="img-fluid" />
              <h4>Phones</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/electronics/laptops">
            <div className="category-card">
              <img src="/images/laptops.jpg" alt="Laptops" className="img-fluid" />
              <h4>Laptops</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/electronics/accessories">
            <div className="category-card">
              <img src="/images/accessories.jpg" alt="Accessories" className="img-fluid" />
              <h4>Accessories</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
