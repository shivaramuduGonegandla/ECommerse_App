import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import { FaHome, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact Us" />
      <div className="container-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019486057855!2d-122.42123428468188!3d37.77928097975779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5eec8f6f%3A0xbdb2ed8a7a485ed6!2sH.No%3A12%2F157%2F1%2C%20East%20BC%20Colony%2C%20Gudur(V%26M)%2C%20Kurnool%20District%2C%20AndraPradesh.%20Pincode-%20518466!5e0!3m2!1sen!2sus!4v1618228914601!5m2!1sen!2sus"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className="contact-wrapper d-flex justify-content-between">
                <div className="contact-form">
                  <h3 className='contact-title'>Contact Us</h3>
                  <form>
                    <div className="form-group">
                      <input type='text' className='form-control' placeholder='Name' />
                    </div>
                    <div className="form-group">
                      <input type='email' className='form-control' placeholder='Email' />
                    </div>
                    <div className="form-group">
                      <input type='text' className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div className="form-group">
                      <textarea className='w-100 form-control' cols="30" rows="10" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button'>Submit</button>
                    </div>
                  </form>
                </div>
                <div className="contact-info">
                  <h3 className='contact-title'>Get in Touch with Us</h3>
                  <p>
                    <FaHome className="icon" /> 
                    Address: H.No:12/157/1, East BC Colony, Gudur(V&M), Kurnool District, Andhra Pradesh, Pincode - 518466
                  </p>
                  <p>
                    <a href="tel:+919951916964" className="icon-link">
                      <FaPhone className="icon" /> 
                      Phone: +91-9951916964
                    </a>
                  </p>
                  <p>
                    <a href="mailto:shivaramudu2002@gmail.com" className="icon-link">
                      <FaEnvelope className="icon" /> 
                      Email: shivaramudu2002@gmail.com
                    </a>
                  </p>
                  <p>
                    <FaClock className="icon" /> 
                    Monday-Friday: 10 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
