import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container-xxl">
          <div className="row aligns-item-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'> Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className='input-group'>
                <input 
                  type='text'
                  className='form-control py-1'
                  placeholder='Your Email Address'
                  aria-label='Your Email Address'
                  aria-describedby='basic-addon-2'
                />
                <span className='input-group-text p-2' id="basic-addon-2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  H.No:12/157/1, East BC Colony, Gudur(V&M), Kurnool District, AndraPradesh. Pincode- 518466.
                </address>
               
               {/* Google Map Embed */}
              <div className='map-container'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019486057855!2d-122.42123428468188!3d37.77928097975779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5eec8f6f%3A0xbdb2ed8a7a485ed6!2sH.No%3A12%2F157%2F1%2C%20East%20BC%20Colony%2C%20Gudur(V%26M)%2C%20Kurnool%20District%2C%20AndraPradesh.%20Pincode-%20518466!5e0!3m2!1sen!2sus!4v1618228914601!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Location Map"
                ></iframe>
              </div>    
            </div>
          </div>

            <div className="col-8">
              <div className="row">
                <div className="col-4">
                  <h4 className='text-white mb-4'>Information</h4>
                  <div className='footer-link d-flex flex-column'>
                    <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                    <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                    <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                    <Link to="/terms-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
                    <Link className="text-white py-2 mb-1">Blogs</Link>
                  </div>
                </div>

                <div className="col-4">
                  <h4 className='text-white mb-4'>Account</h4>
                  <div className='footer-link d-flex flex-column'>
                    <Link className="text-white py-2 mb-1">About Us</Link>
                    <Link className="text-white py-2 mb-1">Faq</Link>
                    <Link className="text-white py-2 mb-1">Contact</Link>
                  </div>
                </div>

                <div className="col-4">
                  <h4 className='text-white mb-4'>Quick Links</h4>
                  <div className='footer-link d-flex flex-column'>
                    <Link className="text-white py-2 mb-1">Laptops</Link>
                    <Link className="text-white py-2 mb-1">Headphones</Link>
                    <Link className="text-white py-2 mb-1">Tablets</Link>
                    <Link className="text-white py-2 mb-1">Watch</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='social-icons d-flex justify-content-center gap-3 mb-3'>
              
              <Link to='https://www.linkedin.com/in/shivaramudu-gonegandla-590309251/' className='text-white'>
                <BsLinkedin size={24} className='icon-linkedin' />
              </Link>
              
              <Link to='https://github.com/shivaramuduGonegandla' className='text-white'>
                <BsGithub size={24} className='icon-github' />
              </Link>
              
              <Link to='https://www.instagram.com/lovelyshiva_1125_/' className='text-white'>
                <BsInstagram size={24} className='icon-instagram' />
              </Link>
              
              <Link to='https://api.whatsapp.com/send?phone=919951916964&text=Hello Shiva,Please I Want Connect With You!' className='text-white'>
                <BsWhatsapp size={24} className='icon-whatsapp' />
              </Link>
              
            </div> 
            
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()} Shivaramudu Gonegandla All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
