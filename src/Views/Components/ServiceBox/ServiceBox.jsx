import React from "react";

const ServiceBox = ({ icon, servicetitle, servicetext }) => {
  return (
    <>
      <div id="service-box">
        <div id="service-default-icon">
          <img src={icon} alt="icon" />
        </div>
        <h3 className="servicetitle text-dark mt-4">{servicetitle}</h3>
        <div className="mt-3 mb-5">
          <p className="servicetext text-secondary">{servicetext}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
