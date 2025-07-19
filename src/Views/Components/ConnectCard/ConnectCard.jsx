import React from "react";
import Button from "../../Components/Buttons/Button";
const ConnectCard = () => {
  return (
    <section>
      <div className="container-fluid d-flex justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 connect-cards">
              <div className="connect-img">
                <img
                  className="img-fluid"
                  src="https://kennedyconcrete.com/orlando/wp-content/uploads/sites/7/2024/08/concrete-slab-_-kennedy-concrete-9184-1-768x576.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 connect-cards">
              <h2 className="text-uppercase connect-card-title mb-2">
                Connect With Us
              </h2>
              <h1 className="connect-card-sub-title mb-3">
                Ready to Get Started?
              </h1>
              <div className="connect-para">
                <p>
                  Instantly quote and order your concrete delivery needs with
                  Kennedy Concrete Orlando – where quality meets convenience.
                  Have questions? Our Orlando-based team is here to help with
                  all your concrete delivery needs.
                </p>
                <p className="mt-3">
                  Contact us for a free concrete delivery quote and discover why
                  Kennedy Concrete is Orlando’s preferred concrete delivery
                  provider.
                </p>
              </div>
              <div className="details mt-4 ms-3">
                <p>Call us Today</p>
                <a href="#">(407) 708-9175</a>
              </div>
              <div className="mt-4">
                <Button
                  bgColor="#de0b18"
                  textColor="#fff"
                  text="QUOTE & ORDER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCard;
