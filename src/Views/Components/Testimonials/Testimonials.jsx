import React from "react";

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="testimonials-container">
            <div className="text-container d-flex justify-content-center align-items-center">
              <div className="container">
                <div>
                  <div className="title">
                    <div className="sub-title">
                      <span className="mb-3 text-uppercase">
                        What People Say
                      </span>
                    </div>
                    <h2 className="text-dark text-center">Testimonials</h2>
                    <p>
                      Hear from our satisfied Orlando customers and learn why
                      they trust Kennedy Concrete for their projects.
                    </p>
                  </div>
                  <div className="testimonial-wrapper d-flex gap-3">
                    <div className="testimonial-card">
                      <div className="quote-corner"></div>
                      <div className="user-image">
                        <img
                          src="https://kennedyconcrete.com/orlando/wp-content/plugins/elementor/assets/images/placeholder.png"
                          alt="User"
                        />
                      </div>
                      <h4 className="user-name">Casa Laris</h4>
                      <p className="user-role">Designation</p>
                      <div className="stars d-flex gap-2 justify-content-center">
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                      </div>
                      <p className="testimonial-text">
                        The service has reasonable in cost. Customer Service was
                        great and cement delivery was fast, knowledgeable hard
                        working team. If you need driveway or cement drop they
                        are the go to company
                      </p>
                    </div>
                    <div className="testimonial-card">
                      <div className="quote-corner"></div>
                      <div className="user-image">
                        <img
                          src="https://kennedyconcrete.com/orlando/wp-content/plugins/elementor/assets/images/placeholder.png"
                          alt="User"
                        />
                      </div>
                      <h4 className="user-name">Oleg VK</h4>
                      <p className="user-role">Designation</p>
                      <div className="stars d-flex gap-2 justify-content-center">
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                      </div>
                      <p className="testimonial-text">
                        Outstanding service. I am owner builder and worked on
                        two projects with them. The drivers were patient and
                        very knowledgeable. Outstanding team and service.
                      </p>
                    </div>
                    <div className="testimonial-card">
                      <div className="quote-corner"></div>
                      <div className="user-image">
                        <img
                          src="https://kennedyconcrete.com/orlando/wp-content/plugins/elementor/assets/images/placeholder.png"
                          alt="User"
                        />
                      </div>
                      <h4 className="user-name">Leev Peterson</h4>
                      <p className="user-role">Designation</p>
                      <div className="stars d-flex gap-2 justify-content-center">
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                        <i class="fa-solid fa-star fs-6"></i>
                      </div>
                      <p className="testimonial-text">
                        Arrived on time, did not rush the job, helped get the
                        material where I needed it. Some others may be less
                        expensive, but Kennedy was competitive with most other
                        providers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
