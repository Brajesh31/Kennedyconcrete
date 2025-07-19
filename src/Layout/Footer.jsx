import React from "react";
import Button from "../Views/Components/Buttons/Button";

import img from "../assets/img/footer_logo.png";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-wrapper">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-auto">
                  <div className="title-area mb-lg-0 text-lg-start text-center text-light">
                    <span className="sub-title">NEED ANY HELP?</span>
                    <h2 className="second-title mb-0 mt-2">Connect with Us</h2>
                  </div>
                </div>
                <div className="col-lg-auto text-center mt-5 mt-md-4 mt-lg-0">
                  <Button />
                  {/* <button className="btn"></button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer text-light">
          <div className="container-fluid d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-md-6 col-xxl-3 col-xl-4">
                  <div className="footer-logo mb-3 ms-2 ms-lg-0 ms-ms-0">
                    <img src={img} alt="footerlogo" />
                  </div>
                  <div className="footer-text">
                    <p>
                      Kennedy Concrete was founded with a simple mission: to
                      provide top-notch concrete services to contractors and DIY
                      enthusiasts alike. With a focus on personalized service
                      and a dedicated delivery fleet, you're always our top
                      priority. Choose Kennedy Concrete, where you're never just
                      another customer.
                    </p>
                  </div>
                </div>
                <div
                  className="col-md-6 col-xl-auto mt-3 mt-md-0 mt-lg-0"
                  id="footer-nav"
                >
                  <div className="footer-nav">
                    <h3>Company</h3>
                  </div>
                  <ul className="menu_company mt-4">
                    <li>
                      <a href="" className="with-icon">
                        AboutUs
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Calculator
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Driver Jobs
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-md-6 col-xl-auto mt-3 mt-md-4 mt-lg-4 mt-xl-0"
                  id="footer-nav"
                >
                  <div className="footer-nav">
                    <h3>Locations</h3>
                  </div>
                  <ul className="menu_company mt-4">
                    <li>
                      <a href="" className="with-icon">
                        Oriando
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Tampa
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Breavard
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-md-6 col-xl-auto mt-3 mt-md-4 mt-lg-4 mt-xl-0"
                  id="footer-nav"
                >
                  <div className="footer-nav">
                    <h3>Concrete Projects</h3>
                  </div>
                  <ul className="menu_company mt-4">
                    <li>
                      <a href="" className="with-icon">
                        Sidewalk
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Driveway
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Slab
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Cell Fill
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Commercial
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Shotcrete
                      </a>
                    </li>
                    <li>
                      <a href="" className="with-icon">
                        Decorative Concreate
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cpoywrite-container container-fluid d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-6">
                <p className="copywrite-text text-center text-md-start text-lg-start">
                  Copyright © 2025 All Rights Reserved Kennedy Concrete
                </p>
              </div>
              <div className="col-lg-6 text-end d-none d-lg-block">
                <div className="privacy-policy">
                  <span>Privacy Policy</span>
                  <span className="ms-2 me-2"> | </span>
                  <span>Sitemap</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
