import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta"; // Ensure Meta is imported

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    // Example: Send a request to the backend to initiate password reset
    setSubmitted(true);
  };

  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Reset Password</h3>
              {submitted ? (
                <p className='text-center'>A reset link has been sent to your email address.</p>
              ) : (
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className='mt-3'>
                    <button type='submit' className='button border-0'>
                      Submit
                    </button>
                  </div>
                </form>
              )}
              <div className='mt-3 text-center'>
                <Link to="/login">Back to Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
