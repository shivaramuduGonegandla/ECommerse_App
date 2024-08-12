import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/meta';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tab',
      price: 50,
      quantity: 1,
      image: '/images/tab.jpg'
    },
    {
      id: 2,
      name: 'Headphones',
      price: 75,
      quantity: 2,
      image: '/images/main-banner.jpg'
    }
  ]);

  const [showContactPayment, setShowContactPayment] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { cartItems, total: getTotal() } });
  };

  const handleAddToCartClick = () => {
    setShowContactPayment(true);
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

  return (
    <>
      <Meta title={'Shopping Cart'} />
      <BreadCrumb title="Shopping Cart" />

      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="cart-header py-3 d-flex justify-content-between align-items-center">
            <h4 className='cart-col-1'>Product</h4>
            <h4 className='cart-col-2'>Price</h4>
            <h4 className='cart-col-3'>Quantity</h4>
            <h4 className='cart-col-4'>Total</h4>
            <h4 className='cart-col-5'>Actions</h4>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="cart-item py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="ms-3">
                  <h5 className='title'>{item.name}</h5>
                </div>
              </div>
              <div className="cart-col-2">
                <p className='price'>${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-col-3">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                  className="quantity-input"
                />
              </div>
              <div className="cart-col-4">
                <p className='total'>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="cart-col-5">
                <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-footer py-3 d-flex justify-content-between align-items-center">
            <h4>Total</h4>
            <p className='total-price'>${getTotal().toFixed(2)}</p>
            <button className="btn btn-primary" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      </section>

      {/* Add to Cart Button */}
      <div className="container-xxl py-3">
        <button className="btn btn-success w-100" onClick={handleAddToCartClick}>Add to Cart</button>
      </div>

      {/* Contact and Payment Options */}
      {showContactPayment && (
        <section className="contact-payment-options py-5">
          <div className="container-xxl">
            <div className="contact-info">
              
            </div>
            <div className="payment-options">
              <h5>Payment Options:</h5>
              <div>
              <div className="payment-icons d-flex">
                {Object.keys(paymentOptions).map((method) => (
                  <div key={method} className="payment-option" onClick={() => handlePaymentOptionClick(method)}>
                    <img src={paymentOptions[method]} alt={method} className='payment-icon'/>
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
