import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/buildingmaterials/about"
      );
      setShowMore(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center align-items-center service-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <iframe
                  className="service-iframe"
                  width="615"
                  height="346"
                  src="https://www.youtube.com/embed/FDh_iSt7Ftw"
                  title="Kennedy Concrete Supplies Block and Building Materials 🧱"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about">
                  <h2 className="about-title">{showMore.about_title}</h2>

                  <h1 className="mt-3">{showMore.heading}</h1>

                  <p className="mt-4">{showMore.description}</p>

                  <div className="packges mt-5">
                    <div className="grid">
                      {showMore?.packages?.map((pkg, index) => (
                        <div
                          className={
                            index === 0 ? "wallpackges" : "slabpackges"
                          }
                          id="packages"
                          key={index}
                        >
                          <h4>
                            <strong>{pkg?.title || "Untitled Package"}</strong>
                          </h4>

                          <p>
                            {pkg?.description || "No description available."}
                          </p>

                          <ul className="list">
                            {pkg?.items?.map((item, idx) => (
                              <li key={idx}>
                                <p>{item || "No item"}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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

export default About;
