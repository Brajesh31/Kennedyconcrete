import React from "react";
import icon1 from "../../../../assets/img/service-icon-1-6.svg";
import icon2 from "../../../../assets/img/serviceicon1.svg";
import icon3 from "../../../../assets/img/serviceicon2.svg";

const WhyConcrete = () => {
  const services = [
    {
      icon: icon1,
      title: "Personalized Attention",
      text: "Your project is our priority. Avoid getting lost in the shuffle with our focused approach, especially suited for Orlando's diverse construction landscape",
    },
    {
      icon: icon2,
      title: "Expert Team",
      text: "Our dedicated Orlando team of professionals is here to provide expert advice and personalized support for your project and deliver excellence in every mix. ",
    },
    {
      icon: icon3,
      title: "Community Involvement",
      text: "Deeply rooted in the Orlando area, our team of professionals is committed to supporting local development and community projects.",
    },
  ];
  return (
    <section>
      <div className="team">
        <div id="background">
          <div className="container-fluid d-flex justify-content-center align-item-center">
            <div className="container">
              <div className="title-area mb-4">
                <div className="title">
                  <div className="sub-title">
                    <span className="mb-3 text-uppercase">
                      What Sets Us Apart
                    </span>
                  </div>
                  <h2 className="text-light text-center ">
                    Why Choose Kennedy <br /> Concrete Orlando?
                  </h2>
                  <p
                    className="text-light text-center para "
                    style={{ maxWidth: "981px" }}
                  >
                    Kennedy Concrete isn't just another concrete supplier. We
                    focus on you, the customer, not on high rises or production
                    builders. This means you'll never be just another order to
                    us. Whether your project is big or small, our commitment to
                    personalized service and meticulous attention to detail
                    remains the same.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="service mt-5 pt-2 d-flex justify-content-center align-item-center">
            <div className="container d-flex justify-content-center gap-3">
              {services.map((service) => (
                <div className="service-box mt-5 ms-1 gap-3">
                  <div className="service-default-icon ms-5">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h3 className="service-title mt-4">{service.title}</h3>
                  <div className="mt-3">
                    <p className="service-text">{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyConcrete;
