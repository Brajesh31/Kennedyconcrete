import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Section1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://kennedyconcreteapi.onrender.com/form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  const [contractor, setcontractor] = useState();

  const fetchingData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/preferredcontractors"
      );
      setcontractor(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid" id="preferredcontractors">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="container gap main-container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-center contract_title">
                    <strong>
                      {contractor?.blacktext}
                      <span className="d-block d-md-inline d-lg-block">
                        {contractor?.red}
                      </span>
                    </strong>
                  </h2>
                  <p>{contractor?.para}</p>

                  <h4>
                    <strong>
                      {contractor?.blacktitle}{" "}
                      <span>{contractor?.redtitle}</span>:
                    </strong>
                  </h4>

                  <ol className="work-list">
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.firstlinetitle}: </strong>
                        {contractor?.firstline}
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.secondlinetitle}: </strong>
                        {contractor?.secondline}
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.thirdlinetitle}: </strong>
                        {contractor?.thirdline}
                      </p>
                    </li>
                  </ol>

                  <h4>
                    <strong>
                      {contractor?.blacktitleone}
                      <span> {contractor?.redtitletwo}</span>:
                    </strong>
                  </h4>

                  <ul className="work-list list-style">
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.line1title}:</strong>
                        {contractor?.line1}
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.line2title}: </strong>
                        {contractor?.line2}
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        <strong>{contractor?.line3title}:</strong>
                        {contractor?.line3}
                      </p>
                    </li>
                  </ul>

                  <h4>
                    <strong>
                      {contractor?.blacktextconnect}
                      <span> {contractor?.redtextconnect}</span>
                    </strong>
                  </h4>

                  <p id="connect-para">{contractor?.paratwo}</p>

                  <div className="container">
                    <div className="container forms-container">
                      {submitted ? (
                        <div className="mt-4 mb-4">
                          <p className="text-secondary">
                            Thanks for submitting the form.
                          </p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control input"
                              id="firstName"
                              {...register("firstName")}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control input"
                              id="lastName"
                              {...register("lastName")}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              className="form-control input"
                              id="email"
                              {...register("email", {
                                required:
                                  "Please complete this required field.",
                              })}
                            />
                            {errors.email && (
                              <small className="text-danger">
                                {errors.email.message}
                              </small>
                            )}
                          </div>

                          <div className="mb-3">
                            <label
                              htmlFor="projectOverview"
                              className="form-label"
                            >
                              Project Overview
                            </label>
                            <textarea
                              className="form-control input"
                              id="projectOverview"
                              rows="3"
                              {...register("projectOverview", {
                                required:
                                  "Please complete all required fields.",
                              })}
                            ></textarea>
                            {errors.projectOverview && (
                              <small className="text-danger">
                                {errors.projectOverview.message}
                              </small>
                            )}
                          </div>

                          <button
                            type="submit"
                            className="btn btn-primary d-flex justify-content-center align-items-center mt-5 mb-4"
                          >
                            Submit
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                  <h4>
                    <strong>
                      {contractor?.projectblacktext}
                      <span> {contractor?.projectredtext}</span>
                    </strong>
                  </h4>

                  <p>{contractor?.projectpara}</p>

                  <h4>
                    <strong>
                      {contractor?.getmatchedtext}
                      <span>{contractor?.concreteredtext}</span>
                    </strong>
                  </h4>

                  <p>{contractor?.paratwo}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <iframe
                      width="1140"
                      height="641"
                      src={contractor?.video_link}
                      title="Need Concrete Finishers or Pumpers? Kennedy Concrete Has You Covered!"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
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

export default Section1;
