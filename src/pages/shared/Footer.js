import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer style={{ background: `url(${footer})` }}>
      <div className="footer p-10 flex justify-around ">
        <div>
          <span className="footer-title text-lg">Services</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title text-lg">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Mirpur-10
          </Link>
          <Link to="/" className="link link-hover">
            Dhaka
          </Link>
        </div>
      </div>
      <div className="text-center mb-5">
        <p>Copyright © 2022 - All right reserved by Doctor Portal</p>
      </div>
    </footer>
  );
};

export default Footer;
