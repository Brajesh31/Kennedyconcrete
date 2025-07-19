import React from "react";
import "../../../assets/CSS/Button.css";

const Button2 = ({
  text = "GET A QUOTE",
  href = "#",
  bgColor = "#de0b18",
  textColor = "#fff",
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
    <a href={href} className="normalbtn" style={btnStyle}>
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

export default Button2;
