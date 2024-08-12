import React from 'react';
import { Link } from 'react-router-dom';

const SportsPage = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Sports</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/category/sports/outdoor">
            <div className="category-card">
              <img src="/images/outdoor-sports.jpg" alt="Outdoor Sports" className="img-fluid" />
              <h4>Outdoor</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/sports/indoor">
            <div className="category-card">
              <img src="/images/indoor-sports.jpg" alt="Indoor Sports" className="img-fluid" />
              <h4>Indoor</h4>
            </div>
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/category/sports/fitness">
            <div className="category-card">
              <img src="/images/fitness-sports.jpg" alt="Fitness" className="img-fluid" />
              <h4>Fitness</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
