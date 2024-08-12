import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/meta';

const Checkout = () => {
  const { state } = useLocation();
  const { cartItems, total } = state || { cartItems: [], total: 0 };

  return (
    <>
      <Meta title={'Checkout'} />
      <BreadCrumb title="Checkout" />

      <section className="checkout-wrapper py-5">
        <div className="container-xxl">
          <h2 className="mb-4">Your Cart Items</h2>

          {cartItems && cartItems.length > 0 ? (
            <div className="cart-items">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4'>Total</h4>
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
                    <p className='quantity'>{item.quantity}</p>
                  </div>
                  <div className="cart-col-4">
                    <p className='total'>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}

              <div className="cart-footer py-3 d-flex justify-content-between align-items-center">
                <h4>Total</h4>
                <p className='total-price'>${total.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}

          {/* Add your payment and address form here */}
          <div className="checkout-actions mt-4">
            <button className="btn btn-primary">Complete Purchase</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
