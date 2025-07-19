// import React, { useEffect, useRef } from "react";
import icon1 from "../../../assets/img/serviceicon1.svg";
import icon2 from "../../../assets/img/serviceicon2.svg";
import icon3 from "../../../assets/img/serviceicon3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import LazyYouTube from "../../Components/LazyYouTube/LazyYouTube";

const Team = () => {
  const services = [
    {
      icon: icon1,
      title: "Order Tracking",
      text: "We understand the unique needs of contractors. That's why we offer exclusive pricing options. Register with us for tailored rates that help you stay on budget without compromising quality.",
    },
    {
      icon: icon2,
      title: "Exclusive Pricing",
      text: "We provide competitive pricing exclusively for contractors. Sign up to access special deals tailored for your business needs.",
    },
    {
      icon: icon3,
      title: "Quality Assurance",
      text: "All products go through rigorous quality checks, ensuring you get the best materials for your projects every time.",
    },
    {
      icon: icon3,
      title: "Quality Assurance",
      text: "All products go through rigorous quality checks, ensuring you get the best materials for your projects every time.",
    },
  ];

  const teamVideos = [
    {
      videoId: "s2-osIOjOy8",
      title: "Lonnie, General Manager, Orlando and Brevard",
    },
    {
      videoId: "Nln6hcJJSyg",
      title: "Jeff, General Manager, Tampa and Ocala",
    },
    {
      videoId: "rmxda74qUg8",
      title: "Latisha, Plant Manager, Orlando",
    },
    {
      videoId: "SEReegQnG6w",
      title: "Andy, Dispatch Manager",
    },
  ];

  // const sliderRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const slider = sliderRef.current;
  //     if (!slider) return;

  //     const firstCard = slider.children[0];
  //     const cardWidth = firstCard.offsetWidth + 32; // include margin

  //     slider.style.transition = "transform 0.5s ease-in-out";
  //     slider.style.transform = `translateX(-${cardWidth}px)`;

  //     const handleTransitionEnd = () => {
  //       slider.style.transition = "none";
  //       slider.style.transform = "translateX(0)";
  //       slider.appendChild(firstCard);
  //       slider.removeEventListener("transitionend", handleTransitionEnd);
  //     };

  //     slider.addEventListener("transitionend", handleTransitionEnd);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <section>
        <div className="team">
          <div id="background">
            <div className="container-fluid d-flex justify-content-center align-item-center">
              <div className="container">
                <div className="title-area mb-4">
                  <div className="title">
                    <div className="sub-title">
                      <span className="mb-3 text-uppercase">
                        What Sets Us Apart?
                      </span>
                    </div>
                    <h2 className="text-light text-center ">
                      Why Choose Kennedy Concrete?
                    </h2>
                    <p
                      className="text-light text-center para "
                      style={{ maxWidth: "981px" }}
                    >
                      Kennedy Concrete isn't just another concrete supplier. We
                      focus on you, the customer, not on high rises or
                      production builders. This means you'll never be just
                      another order to us. Whether your project is big or small,
                      our commitment to personalized service and meticulous
                      attention to detail remains the same.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service mt-5 pt-2 d-flex justify-content-center align-item-center">
              <div className="container">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {services.map((service, index) => (
                    <SwiperSlide key={index}>
                      <div className="service-box mt-5 ms-1 gap-3">
                        <div className="service-default-icon ms-5">
                          <img src={service.icon} alt={service.title} />
                        </div>
                        <h3 className="service-title mt-4">{service.title}</h3>
                        <div className="mt-3">
                          <p className="service-text">{service.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="title-area mb-4 mt-5 pt-5">
            <div className="title">
              <div className="sub-title">
                <span className="mb-3">OUR TEAM</span>
              </div>
              <h2 className="text-light text-center">
                Meet Our Experienced Team
              </h2>
            </div>
          </div>

          <div className="container-fluid d-flex justify-content-center align-item-center w-100">
            <div className="container">
              <div className="row d-flex w-100">
                {teamVideos.map((video, index) => (
                  <div
                    key={index}
                    className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center video-section"
                    id="video-section"
                  >
                    <LazyYouTube videoId={video.videoId} />
                    <h2 className="text-light">{video.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
