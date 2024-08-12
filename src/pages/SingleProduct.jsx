import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import ImageZoom from 'react-image-zoom';
import watchImage from '/images/watch1.jpg'; // Ensure this path is correct

const SingleProduct = () => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const zoomProps = {
    img: watchImage, // Use the imported image here
    zoomWidth: 500,
    offset: { vertical: 10, horizontal: 10 },
    scale: 1.5,
  };

  const handleWriteReviewClick = () => {
    setShowReviewForm(true);
    window.scrollTo({ top: document.getElementById("write-review-form").offsetTop, behavior: 'smooth' });
  };

  const handleAddToCart = () => {
    setShowPaymentMethods(true);
  };

  const handlePaymentOptionClick = (paymentType) => {
    setSelectedPaymentMethod(paymentType);
  };

  const paymentOptions = {
    UPI: '/images/upi-logo.png',
    PhonePe: '/images/phonepe-logo.png',
    Paytm: '/images/paytm-logo.png',
    GooglePay: '/images/googlepay-logo.png',
    BharatPay: '/images/bharatpay-logo.png',
  };

  const qrCodeData = {
    UPI: 'upi://pay?pa=9951916964&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=10.00&cu=INR&url=',
    PhonePe: 'phonepe://pay?pa=9951916964&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=10.00&cu=INR&url=',
    Paytm: 'paytm://pay?pa=9951916964&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=10.00&cu=INR&url=',
    GooglePay: 'googlepay://pay?pa=9951916964&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=10.00&cu=INR&url=',
    BharatPay: 'bharatpay://pay?pa=9951916964&pn=YourName&mc=0000&tid=1234567890&tr=1234567890&tn=Payment&am=10.00&cu=INR&url=',
  };

  const popularProducts = [
    { title: 'Watch 1', price: '150.00', image: '/images/popular-watch1.jpg' },
    { title: 'Watch 2', price: '200.00', image: '/images/popular-watch2.jpg' },
    { title: 'Watch 3', price: '250.00', image: '/images/popular-watch3.jpg' },
    { title: 'Watch 4', price: '300.00', image: '/images/popular-watch4.jpg' },
  ];

  return (
    <>
      <Meta title={'Product Name'} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl p-3 bg-white">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                {watchImage ? (
                  <ImageZoom {...zoomProps} />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
            </div>
            <div className="col-6">
              <h4>Product Title</h4>
              <p className="price">$100.00</p>
              <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
              <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>  

      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <p className='bg-white p-3'>
              This exquisite watch seamlessly combines timeless elegance with modern functionality. Featuring a sleek, stainless steel case, it boasts a polished finish that adds a touch of sophistication to any attire. The watch face is protected by a durable sapphire crystal, ensuring clarity and scratch resistance.
              </p>
            </div>
          </div>
        </div>  
      </div>  

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
                <div className="col-4 text-end">
                  <a className='text-dark text-decoration-underline' href='#write-review-form' onClick={handleWriteReviewClick}>
                    Write a Review
                  </a>
                </div>
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
                      <ReactStars count={5} size={24} value={0} edit={true} activeColor="#ffd700" />
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

      {showPaymentMethods && (
        <section className="payment-methods py-5 home-wrapper-2">
          <div className="container-xxl">
            <h3>Choose Your Payment Method</h3>
            <div className="payment-options">
              {Object.keys(paymentOptions).map((method) => (
                <div key={method} className="payment-option" onClick={() => handlePaymentOptionClick(method)}>
                  <img src={paymentOptions[method]} alt={method} />
                  <h4>{method}</h4>
                </div>
              ))}
            </div>
            {selectedPaymentMethod && (
              <div className="payment-qr">
                <h4>Scan the QR Code</h4>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrCodeData[selectedPaymentMethod])}&size=200x200`} alt="QR Code" />
              </div>
            )}
          </div>
        </section>
      )}

      
    </>
  );
};

export default SingleProduct;
