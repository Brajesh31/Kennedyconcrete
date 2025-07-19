import React from "react";

const TestimonalCard = ({
  testminoal_name,
  testminoal_role,
  testminoal_text,
  testminoal_img,
}) => {
  return (
    <div>
      <div className="testimonial-card">
        <div className="quote-corner"></div>
        <div className="user-image">
          <img src={testminoal_img} alt="User" />
        </div>
        <h4 className="user-name">{testminoal_name}</h4>
        <p className="user-role">{testminoal_role}</p>
        <div className="stars d-flex gap-2 justify-content-center">
          <i class="fa-solid fa-star fs-6"></i>
          <i class="fa-solid fa-star fs-6"></i>
          <i class="fa-solid fa-star fs-6"></i>
          <i class="fa-solid fa-star fs-6"></i>
          <i class="fa-solid fa-star fs-6"></i>
        </div>
        <p className="testimonial-text">{testminoal_text}</p>
      </div>
    </div>
  );
};

export default TestimonalCard;
