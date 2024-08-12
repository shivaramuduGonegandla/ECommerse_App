import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta"; // Ensure Meta is imported

const Forgetpassword = () => {
  return (
    <>
      <Meta title={"Forgetpassword"} />
      <BreadCrumb title="Forgetpassword" />

      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Login</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input
                    type='text'
                    name='username'
                    className='form-control'
                    placeholder='Username'
                  />
                </div>
                <div className='mt-3'>
                  <Link to="/reset-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className='mt-3 d-flex justify-content-center gap-15'>
                  <button type='submit' className='button border-0'>
                    Login
                  </button>
                  <Link to="/signup" className="button signup">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
