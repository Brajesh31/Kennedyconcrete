import React, { useEffect, useState } from "react";
import img from "../../../assets/img/about.png";
import Button from "../../../Views/Components/Buttons/Button";
import img2 from "../../../assets/img/Kennedy_Tampa.png";
import img3 from "../../../assets/img/Kennedy_Orlando.png";
import img4 from "../../../assets/img/Kennedy_Brevard-1.png";
import axios from "axios";
const KennedyConcrete = () => {
  const locationData = [
    { id: 1, img: img2, alt: "Orlando" },
    { id: 2, img: img3, alt: "Tampa" },
    { id: 3, img: img4, alt: "Brevard" },
  ];
  const [aboutData, setAboutData] = useState([]);
  // console.log(aboutData, "aboutData");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/about");
      setAboutData(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <img
                  src={img}
                  className="img-fluid"
                  width="615"
                  height="636"
                  style={{ border: 0 }}
                  alt=""
                />
              </div>

              <div className="col-lg-6 col-md-6 Kennedy-Concrete">
                <h2 className="text-danger fw-bold">{aboutData.aboutTitle}</h2>
                {/* mb-3 ms-4 ms-md-5 ms-lg-5 */}
                <h1 className="display-6">{aboutData.aboutSubTitle}</h1>
                <p className="text">{aboutData.paraone}</p>
                <p className="text">{aboutData.paratwo}</p>
                <div class="container-fluid">
                  <h4 id="sec-title">
                    <strong>{aboutData.locationtitle}</strong>
                  </h4>
                  <div className="row text-center mt-4">
                    {locationData.map((location) => (
                      <div className="col-md-4 mb-4" key={location.id}>
                        <div className="location-card">
                          <img
                            src={location.img}
                            className="img-fluid"
                            alt={location.alt}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
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

export default KennedyConcrete;
