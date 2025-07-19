import React, { useEffect, useState } from "react";
import ServiceBox from "../../../Components/ServiceBox/ServiceBox";
import axios from "axios";
const Apart = ({ title, sub_title, para }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/JSON/Servicebox.json");
        setServices(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchServices();
  }, []);
  return (
    <>
      <div className="background">
        <div className="container-fluid d-flex justify-content-center align-item-center">
          <div className="container" id="apart">
            <div className="title-area">
              <div className="title">
                <div className="sub-title">
                  <span className="mb-3 text-uppercase">{title}</span>
                </div>
                <h2 className="text-light text-center ">{sub_title}</h2>
                <p
                  className="text-light text-center para "
                  style={{ maxWidth: "981px" }}
                >
                  {para}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center align-item-center">
          <div className="container">
            <div className="row">
              {services.map((service, index) => (
                <div
                  className="col-lg-4 col-md-6 mt-5 mt-lg-0 text-light box"
                  key={index}
                >
                  <ServiceBox
                    icon={service.icon}
                    servicetitle={service.servicetitle}
                    servicetext={service.servicetext}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apart;
