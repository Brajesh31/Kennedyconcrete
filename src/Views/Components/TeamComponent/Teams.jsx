import React from "react";

const Teams = () => {
  return (
    <>
      <section>
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
          id="team"
        >
          <div>
            <div className="container ">
              <div className="team-title text-center mb-5">
                <h2>
                  <span>Meet Our Experienced</span>
                  <span className="ms-2">Team</span>
                </h2>
              </div>
              <div className="row d-flex w-100">
                <div
                  className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center video-section"
                  id="video-section"
                >
                  <iframe
                    width="550"
                    height="309"
                    src="https://www.youtube.com/embed/VMyPx9bPnVg"
                    title="Entrega de concreto en Orlando - Kennedy Concrete Orlando"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>

                  <h2 className="text-light text-center">
                    About Kennedy Ivan (Spanish)
                  </h2>
                </div>
                <div
                  className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center video-section"
                  id="video-section"
                >
                  <iframe
                    width="550"
                    height="309"
                    src="https://www.youtube.com/embed/rmxda74qUg8"
                    title="Meet our Plant Manager, Latisha!"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>

                  <h2 className="text-light text-center">
                    Meet Latisha, Orlando Plant Manager
                  </h2>
                </div>
              </div>
              <div className="row d-flex w-100">
                <div
                  className="col-md-6 col-12  d-flex flex-column justify-content-center align-items-center video-section"
                  id="video-section"
                >
                  <iframe
                    width="550"
                    height="309"
                    src="https://www.youtube.com/embed/SEReegQnG6w"
                    title="Exclusive Discounts for First Responders at Kennedy Concrete"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>

                  <h2 className="text-light text-center">
                    Meet Andy, Dispatch Manager
                  </h2>
                </div>
                <div
                  className="col-md-6 col-12 d-flex flex-column justify-content-center align-items-center video-section"
                  id="video-section"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Teams;
