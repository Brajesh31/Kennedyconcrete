import React from "react";
import "../../../assets/CSS/Hero.css";

const Hero = ({ title, backgroundImage }) => {
  const heroStyle = {
    width: "100%",
    height: "305px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#00000092",
    backgroundBlendMode: "darken",
  };

  return (
    <section>
      <div className="container-fluid">
        <div
          className="hero d-flex justify-content-center align-items-center"
          style={heroStyle}
        >
          <div className="container d-flex justify-content-center align-items-center h-100">
            <h2 className="text-center">{title}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
