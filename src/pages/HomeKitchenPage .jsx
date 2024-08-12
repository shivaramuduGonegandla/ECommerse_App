import React from 'react';
import { Link } from 'react-router-dom';

const HomeKitchenPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Home & Kitchen</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/category/home/furniture">
            <div className="category-card">
              <img src="/images/furniture.jpg" alt="Furniture" className="img-fluid" />
              <h4>Furniture</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/home/decor">
            <div className="category-card">
              <img src="/images/decor.jpg" alt="Decor" className="img-fluid" />
              <h4>Decor</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/home/appliances">
            <div className="category-card">
              <img src="/images/appliances.jpg" alt="Appliances" className="img-fluid" />
              <h4>Appliances</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeKitchenPage;
