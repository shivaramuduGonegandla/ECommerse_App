import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta"; // Ensure Meta is imported

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobileNumber, password } = formData;

    if (!name || !email || !mobileNumber || !password) {
      setError('Please fill out all fields');
      return;
    }

    // Handle form submission (e.g., send data to backend)
    setSubmitted(true);
    setError('');
  };

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Sign Up</h3>
              {submitted ? (
                <p className='text-center'>Registration successful. <Link to="/login">Login now</Link></p>
              ) : (
                <form onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='mobileNumber'
                      className='form-control'
                      placeholder='Mobile Number'
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {error && <p className='text-danger'>{error}</p>}
                  <div className='mt-3 d-flex justify-content-center gap-15'>
                    <button type='submit' className='button border-0'>
                      Sign Up
                    </button>
                    <Link to="/login" className="button border-0">
                      Login
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
