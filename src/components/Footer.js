import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer mt-5 py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: luxecart@gmail.com</p>
            <p>Phone: +92 1234567890</p>
          </div>
          <div className="col-md-6 text-md-right">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <p className="text-center">&copy; 2024 Our Website. All rights reserved!</p>
      </div>
    </footer>
  );
}

export default Footer;

