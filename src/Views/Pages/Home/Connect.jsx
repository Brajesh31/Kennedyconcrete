import React, { useState } from "react";
import Button from "../../../Views/Components/Buttons/Button";

const Connect = () => {
  const [isLoading, setIsLoading] = useState(true);

  const iframe =
    "https://www.google.com/maps/d/embed?mid=1bG31d7cgIIW4g2-JDF1zMo8VAcO8jBI&ehbc=2E312F";

  const socialMediaIcons = [
    { icon: "fa-brands fa-facebook", label: "Facebook" },
    { icon: "fa-brands fa-x-twitter", label: "Twitter" },
    { icon: "fa-brands fa-youtube", label: "YouTube" },
    { icon: "fa-brands fa-instagram", label: "Instagram" },
    { icon: "fa-brands fa-linkedin", label: "LinkedIn" },
  ];

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <section className="py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="position-relative">
                  {isLoading && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-light"
                      style={{
                        height: "480px",
                        zIndex: 1,
                        borderRadius: "8px",
                      }}
                    >
                      <div className="text-center">
                        <div
                          className="spinner-border text-danger mb-3"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-muted">Loading Map...</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    src={iframe}
                    width="100%"
                    height="480"
                    style={{
                      border: 0,
                      borderRadius: "8px",
                      opacity: isLoading ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    onLoad={handleIframeLoad}
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 connect">
                <h6 className="text-danger fw-bold">CONNECT WITH US</h6>
                <h1 className="display-6">
                  Schedule Your Concrete Delivery with Kennedy
                </h1>
                <p className="text">
                  Our easy online ordering and scheduling system makes getting
                  your concrete quick and straightforward. Whether you're in
                  Tampa, Orlando, the Space Coast, our experienced team is ready
                  to assist. Let us help you get your project off the ground
                  with the quality and efficiency Kennedy Concrete is known for.
                </p>
                <h4 id="sec-title">
                  <strong>Quality Service, Guaranteed</strong>
                </h4>
                <p className="text">
                  Don't just take our word for it. Experience the Kennedy
                  Concrete difference firsthand. We're the trusted choice for
                  quality ready-mix concrete in Tampa, Orlando, Ocala, and the
                  Space Coast. Contact us for a free quote and discover why
                  homeowners and contractors alike choose Kennedy Concrete.
                </p>

                <div className="d-flex gap-2 mt-4">
                  {socialMediaIcons.map((social, index) => (
                    <div
                      key={index}
                      className="social-media border d-flex justify-content-center align-items-center"
                      title={social.label}
                    >
                      <i className={`${social.icon} fs-5`}></i>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button bgColor="#DE0B18" textColor="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
