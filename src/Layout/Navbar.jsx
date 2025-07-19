import React from "react";
import Button from "../Views/Components/Buttons/Button";
import img from "../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="header-top">
          <div className="mobile-contact d-block d-md-none text-white">
            <div className="container text-center">
              <div className="row align-items-center justify-content-center">
                <div className="col-5 d-flex flex-column align-items-center">
                  <i className="fas fa-phone fa-2x "></i>
                  <span>Call Us</span>
                </div>
                <div className="col-1 d-flex justify-content-center">
                  <div className="divider"></div>
                </div>
                <div className="col-5 d-flex flex-column align-items-center">
                  <i className="fas fa-envelope fa-2x"></i>
                  <span>Email Us</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid d-none d-md-block ">
            <div className="row d-flex justify-content-center justify-content-lg-between align-items-center text-light">
              <div className="col-auto gy-2" id="email">
                <div className="links d-flex align-items-center justify-content-center mt-3 mb-3 ms-2">
                  <i
                    className="fa-regular fa-envelope"
                    style={{ color: "red" }}
                  ></i>
                  <div className="email">
                    <span className="fw-bold">usonlinestore@cemex.com</span>
                  </div>
                </div>
              </div>
              <div className="col-auto gy-2">
                <div
                  className="icons d-flex gap-3"
                  style={{ color: "#fff", fontSize: "small" }}
                >
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-container">
          <div className="menu-area container-fluid">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto" id="logo">
                <div className="header-logo">
                  <a href="#" onClick={() => navigate("/")}>
                    <img src={img} alt="Logo" />
                  </a>
                </div>
              </div>
              <div className="col-auto d-none d-lg-block" id="menu">
                <nav className="main-menu">
                  <ul
                    className="d-flex flex-wrap justify-content-center align-items-center mt-1 list-unstyled"
                    style={{ display: "flex", gap: "30px" }}
                  >
                    <li>
                      <a
                        href="#"
                        className="nav-link text-decoration-none"
                        onClick={() => navigate("/")}
                      >
                        Home
                      </a>
                    </li>

                    {/* About Us */}
                    <li className="dropdown-hover">
                      <a
                        href="#"
                        className="nav-link text-decoration-none d-flex align-items-center"
                      >
                        About Us
                        <span className="plus-icon"></span>
                      </a>
                      <ul className="sub-menu position-absolute list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => navigate("/blog")}
                          >
                            <i className="fa-solid fa-greater-than"></i>Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => navigate("/driver-jobs")}
                          >
                            <i className="fa-solid fa-greater-than"></i>Driver
                            Jobs
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Locations */}
                    <li className="dropdown-hover">
                      <a
                        href="#"
                        className="nav-link text-decoration-none d-flex align-items-center"
                      >
                        Locations
                        <span className="plus-icon"></span>
                      </a>
                      <ul className="sub-menu position-absolute list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => navigate("/orlando")}
                          >
                            <i className="fa-solid fa-greater-than"></i>
                            Orlando
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>Tampa
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>
                            Brevard
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Services */}
                    <li className="dropdown-hover">
                      <a
                        href="#"
                        className="nav-link text-decoration-none d-flex align-items-center"
                      >
                        Services
                        <span className="plus-icon"></span>
                      </a>
                      <ul className="sub-menu position-absolute list-unstyled">
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() =>
                              navigate("/concrete-delivery-service")
                            }
                          >
                            <i className="fa-solid fa-greater-than"></i>
                            Concrete Delivery Areas
                          </a>
                        </li>

                        {/* Nested Dropdown for Concrete Projects */}
                        <li className="dropdown-hover nested-dropdown">
                          <a href="#" className="dropdown-item dropdown-nested">
                            <i className="fa-solid fa-greater-than"></i>
                            Concrete Projects
                            <span className="nested-plus-icon"></span>
                          </a>
                          <ul className="nested-sub-menu position-absolute list-unstyled">
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => {
                                  navigate("/sidewalk");
                                }}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Sidewalk
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => navigate("/driveway")}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Driveway
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => {
                                  navigate("/slab");
                                }}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Slab
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => navigate("/cell-fill")}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Cell Fill
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => navigate("/commercial")}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Commercial
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => navigate("/shotcrete")}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Shotcrete
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="dropdown-item"
                                onClick={() => navigate("/decorative-concrete")}
                              >
                                <i className="fa-solid fa-greater-than"></i>
                                Decorative Concrete
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a
                            href="#"
                            onClick={() =>
                              navigate("/construction-building-materials")
                            }
                            className="dropdown-item"
                          >
                            <i className="fa-solid fa-greater-than"></i>
                            Building Materials
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => navigate("/preferred-contractors")}
                          >
                            <i className="fa-solid fa-greater-than"></i>
                            Preferred Contractors
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Contractor */}
                    <li className="dropdown-hover">
                      <a
                        href="#"
                        className="nav-link text-decoration-none d-flex align-items-center"
                      >
                        Contractor
                        <span className="plus-icon"></span>
                      </a>
                      <ul className="sub-menu position-absolute list-unstyled">
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>
                            Contractor Pricing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>
                            Login / Create An Account
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>Order
                            Order Contractor Now
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Homeowners */}
                    <li className="dropdown-hover">
                      <a
                        href="#"
                        className="nav-link text-decoration-none d-flex align-items-center"
                      >
                        Homeowners
                        <span className="plus-icon"></span>
                      </a>
                      <ul className="sub-menu position-absolute list-unstyled">
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>
                            Concrete Calculator
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>FAQs For
                            Homeowners
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dropdown-item">
                            <i className="fa-solid fa-greater-than"></i>
                            Login / Create An Account
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="dropdown-item"
                            onClick={() => navigate("/instance-quote")}
                          >
                            <i className="fa-solid fa-greater-than"></i>
                            Instant Quote and Ordering
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="nav-link text-decoration-none"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="nav-link text-decoration-none"
                        onClick={() => navigate("/login")}
                      >
                        Login / Sign Up
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <div className="col-auto d-none d-xl-block">
                  <div className="cta-button">
                    <a href="#" className="text-decoration-none">
                      Get Quote
                    </a>
                  </div>
                </div> */}
              <div className="col-auto d-none d-lg-block">
                <Button icon={true} />
              </div>

              {/* Mobile Menu Button - Shows on small to medium screens */}
              <div className="col-auto d-lg-none">
                <button
                  className="btn btn-dark mobile-menu-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobileNavbar"
                  aria-controls="mobileNavbar"
                >
                  <span className="navbar-toggler-icon">
                    {/* <span></span>
                    <span></span>
                    <span></span> */}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Offcanvas Menu */}
        <nav>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="mobileNavbar"
            aria-labelledby="mobileNavbarLabel"
          >
            <div className="offcanvas-header">
              <div className="w-100 text-center">
                <img src={img} alt="Kennedy Logo" className="offcanvas-logo" />
              </div>
              <button
                type="button"
                className="btn-close position-absolute"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="offcanvas-body p-0">
              <ul className="mobile-menu list-unstyled m-0">
                <li className="mobile-menu-item">
                  <a
                    onClick={() => navigate("/")}
                    href="#"
                    className="mobile-nav-link d-flex align-items-center"
                  >
                    <span className="menu-arrow">›</span>
                    <span>Home</span>
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a
                    className="mobile-nav-link d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href="#aboutSubmenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="aboutSubmenu"
                  >
                    <div className="d-flex align-items-center">
                      <span className="menu-arrow menu-arrow-expandable">
                        ›
                      </span>
                      <span>About Us</span>
                    </div>
                    <span className="mobile-plus-icon"></span>
                  </a>
                  <div className="collapse" id="aboutSubmenu">
                    <ul className="mobile-submenu list-unstyled">
                      <li>
                        <a
                          href="#"
                          onClick={() => navigate("/blog")}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-arrow">›</span>
                          <span>Blog</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => navigate("/driver-jobs")}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-arrow">›</span>
                          <span>Driver Jobs</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-menu-item">
                  <a
                    className="mobile-nav-link d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href="#locationsSubmenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="locationsSubmenu"
                  >
                    <div className="d-flex align-items-center">
                      <span className="menu-arrow menu-arrow-expandable">
                        ›
                      </span>
                      <span>Locations</span>
                    </div>
                    <span className="mobile-plus-icon"></span>
                  </a>
                  <div className="collapse" id="locationsSubmenu">
                    <ul className="mobile-submenu list-unstyled">
                      <li>
                        <a
                          href="#"
                          // onClick={() => navigate("/orlando")}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-arrow">›</span>
                          <span>Orlando</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Tampa</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Brevard</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-menu-item">
                  <a
                    className="mobile-nav-link d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href="#servicesSubmenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="servicesSubmenu"
                  >
                    <div className="d-flex align-items-center">
                      <span className="menu-arrow menu-arrow-expandable">
                        ›
                      </span>
                      <span>Services</span>
                    </div>
                    <span className="mobile-plus-icon"></span>
                  </a>
                  <div className="collapse" id="servicesSubmenu">
                    <ul className="mobile-submenu list-unstyled">
                      <li>
                        <a
                          href="#"
                          onClick={() => navigate("/concrete-delivery-service")}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-arrow">›</span>
                          <span>Concrete Delivery Areas</span>
                        </a>
                      </li>

                      {/* Mobile Nested Dropdown for Concrete Projects */}
                      <li>
                        <a
                          className="mobile-submenu-link d-flex justify-content-between align-items-center"
                          data-bs-toggle="collapse"
                          href="#concreteProjectsSubmenu"
                          role="button"
                          aria-expanded="false"
                          aria-controls="concreteProjectsSubmenu"
                        >
                          <div className="d-flex align-items-center">
                            <span className="submenu-arrow">›</span>
                            <span>Concrete Projects</span>
                          </div>
                          <span className="mobile-plus-icon-small"></span>
                        </a>
                        <div className="collapse" id="concreteProjectsSubmenu">
                          <ul className="mobile-nested-submenu list-unstyled">
                            <li>
                              <a
                                onClick={() => navigate("/sidewalk")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Sidewalk</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/driveway")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Driveway</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/slab")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Slab</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/cell-fill")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Cell Fill</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/commercial")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Commercial</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/shotcrete")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Shotcrete</span>
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() => navigate("/decorative-concrete")}
                                href="#"
                                className="mobile-nested-submenu-link"
                              >
                                <span className="nested-submenu-arrow">›</span>
                                <span>Decorative Concrete</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Building Materials</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Preferred Contractor</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-menu-item">
                  <a
                    className="mobile-nav-link d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href="#contractorSubmenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="contractorSubmenu"
                  >
                    <div className="d-flex align-items-center">
                      <span className="menu-arrow menu-arrow-expandable">
                        ›
                      </span>
                      <span>Contractor</span>
                    </div>
                    <span className="mobile-plus-icon"></span>
                  </a>
                  <div className="collapse" id="contractorSubmenu">
                    <ul className="mobile-submenu list-unstyled">
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Contractor Pricing</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Login / Create An Account</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Order Contractor Now</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-menu-item">
                  <a
                    className="mobile-nav-link d-flex justify-content-between align-items-center"
                    data-bs-toggle="collapse"
                    href="#homeownersSubmenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="homeownersSubmenu"
                  >
                    <div className="d-flex align-items-center">
                      <span className="menu-arrow menu-arrow-expandable">
                        ›
                      </span>
                      <span>Homeowners</span>
                    </div>
                    <span className="mobile-plus-icon"></span>
                  </a>
                  <div className="collapse" id="homeownersSubmenu">
                    <ul className="mobile-submenu list-unstyled">
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Concrete Calculator</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>FAQs For Homeowners</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mobile-submenu-link">
                          <span className="submenu-arrow">›</span>
                          <span>Login / Create an Account</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => navigate("/instance-quote")}
                          className="mobile-submenu-link"
                        >
                          <span className="submenu-arrow">›</span>
                          <span>Instant Quote and Ordering</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-menu-item">
                  <a
                    href="#"
                    onClick={() => navigate("/contact-us")}
                    className="mobile-nav-link d-flex align-items-center"
                  >
                    <span className="menu-arrow">›</span>
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="mobile-menu-item">
                  <a
                    href="#"
                    className="mobile-nav-link d-flex align-items-center"
                  >
                    <span className="menu-arrow">›</span>
                    <span>Login / Sign Up</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
