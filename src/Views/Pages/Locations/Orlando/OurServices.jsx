import React from "react";
import Button from "../../../Components/Buttons/Button";
import IconService from "../../../../assets/img/wcu-icon-1-2.svg";
const OurServices = () => {
  return (
    <section>
      <div
        className="container-fluid d-flex justify-content-center"
        id="our-services"
      >
        <div className="container">
          <div>
            <div className="title">
              <div className="sub-title">
                <span className="mb-3 text-uppercase">OUR SERVICES</span>
              </div>
              <h2 className="text-dark text-center">Our Services in Orlando</h2>
            </div>
          </div>
          <div className="col-xl-3 border service-card">
            <div className="img-fluid text-center">
              <img src={IconService} alt="" />
            </div>
            <h3 className="text-center mb-2 mt-3">
              <a href="#">Easy Online Ordering</a>
            </h3>
            <p>
              Conveniently schedule and order your concrete delivery online,
              tailored for Orlando’s fast-paced environment.
            </p>
            <div className="service-button border">
              <button>QUOTE & ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
