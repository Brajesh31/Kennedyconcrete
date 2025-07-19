import React from "react";
import "../../../assets/CSS/Button.css";

const Button = ({
  text = "GET A QUOTE",
  href = "#",
  bgColor = "#fff",
  textColor = "#000",
  hoverBgColor = "#000",
  hoverTextColor = "#fff",
  dotColor = "#000",
  fontweight = "600",
  icon = true,
}) => {
  const btnStyle = {
    backgroundColor: bgColor,
    color: textColor,
    "--hover-bg-color": hoverBgColor,
    "--hover-text-color": hoverTextColor,
    "--dot-color": dotColor,
    fontWeight: fontweight,
  };

  return (
    <a href={href} className="dual-dot-btn" style={btnStyle}>
      <span className="bg-fill"></span>
      {text}{" "}
      {icon && (
        <i
          className="fa-solid fa-arrow-right ms-2"
          style={{ marginLeft: "5px" }}
        ></i>
      )}
    </a>
  );
};

export default Button;
