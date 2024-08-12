// src/components/Reviews.js

import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const Reviews = ({ showWriteReview = false }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleWriteReviewClick = () => {
    setShowReviewForm(true);
    window.scrollTo({ top: document.getElementById("write-review-form").offsetTop, behavior: 'smooth' });
  };

  const handleRatingChange = (newRating) => {
    setSelectedRating(newRating);
  };

  return (
    <section className="reviews-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper d-flex">
              <div className="col-8">
                <h4 className='mb-2'>Customer Reviews</h4>
                <div className='d-flex align-items-center gap-10'>
                  <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                </div>
              </div>
              {showWriteReview && (
                <div className="col-4 text-end">
                  <a className='text-dark text-decoration-underline' href='#write-review-form' onClick={handleWriteReviewClick}>
                    Write a Review
                  </a>
                </div>
              )}
            </div>

            {showReviewForm && (
              <div className="write-review mt-4" id="write-review-form">
                <h4>Write a Review</h4>
                <form className="review-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="Your Email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <ReactStars count={5} size={24} value={selectedRating} edit={true} activeColor="#ffd700" onChange={handleRatingChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="review-title">Review Title</label>
                    <input type="text" id="review-title" className="form-control" placeholder="Review Title" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="review-body">Review</label>
                    <textarea id="review-body" className="form-control" placeholder="Write your review here..." maxLength="1500" rows="5" required></textarea>
                    <small className="text-muted">Max 1500 characters</small>
                  </div>

                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
