import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // All form data will be collected in this object
    console.log("Form Data Object:", data);

    // You can also send this data to your API
    // try {
    //   const response = await fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const result = await response.json();
    //   console.log('Success:', result);
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  // Optimized phone pattern (removed unnecessary complexity)
  const phonePattern = /^[0-9+().\-x\s]+$/;

  // Inline styles moved to prevent re-renders
  const checkboxGroupStyle = {
    display: "flex",
    alignItems: "start",
    gap: "8px",
    marginBottom: "8px",
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div>
        <div className="text-center mb-5" id="driverjob-form-container">
          <div className="mt-5">
            <h2>Join Our Team</h2>
          </div>
          <div>
            <h1>Join Our Team of Professionals</h1>
          </div>
        </div>

        <div style={{ padding: "30px" }}>
          <div className="container-fluid">
            <div className="container forms-container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label htmlFor="firstName" className="form-label">
                        First Name<span className="text-danger">*</span>
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
                        Last Name<span className="text-danger">*</span>
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
                          required: "Please complete this required field.",
                        })}
                      />
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phonenumber" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control input"
                        id="phonenumber"
                        {...register("phonenumber", {
                          required: "Please complete this required field.",
                          pattern: {
                            value: phonePattern,
                            message:
                              "A valid phone number may only contain numbers, +()-. or x",
                          },
                        })}
                      />
                      {errors.phonenumber && (
                        <small className="text-danger">
                          {errors.phonenumber.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="locationofinterest"
                        className="form-label"
                      >
                        Location of Interest{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select input locationOfInterest"
                        id="form-select"
                        {...register("locationOfInterest", {
                          required: "Please complete this required field.",
                        })}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Please Select
                        </option>
                        <option value="Orlando">Orlando</option>
                        <option value="Tampa">Tampa</option>
                        <option value="Ocala">Ocala</option>
                        <option value="Brevard">Brevard</option>
                      </select>
                      {errors.locationOfInterest && (
                        <small className="text-danger">
                          {errors.locationOfInterest.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Do you have a CDL-A or CDL-B license?{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cdlA"
                          value="CDL-A"
                          {...register("cdlLicense", {
                            required: "Please complete this required field.",
                          })}
                        />
                        <label className="form-check-label" htmlFor="cdlA">
                          CDL-A
                        </label>
                      </div>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cdlB"
                          value="CDL-B"
                          {...register("cdlLicense")}
                        />
                        <label className="form-check-label" htmlFor="cdlB">
                          CDL-B
                        </label>
                      </div>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cdlNo"
                          value="No"
                          {...register("cdlLicense")}
                        />
                        <label className="form-check-label" htmlFor="cdlNo">
                          No
                        </label>
                      </div>
                      {errors.cdlLicense && (
                        <small className="text-danger">
                          {errors.cdlLicense.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Do you have experience driving a 10-speed manual shift
                        transmission? <span className="text-danger">*</span>
                      </label>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="manualYes"
                          value="Yes"
                          {...register("manualTransmissionExperience", {
                            required: "Please complete this required field.",
                          })}
                        />
                        <label className="form-check-label" htmlFor="manualYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="manualNo"
                          value="No"
                          {...register("manualTransmissionExperience")}
                        />
                        <label className="form-check-label" htmlFor="manualNo">
                          No
                        </label>
                      </div>
                      {errors.manualTransmissionExperience && (
                        <small className="text-danger">
                          {errors.manualTransmissionExperience.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">
                        Do you have Ready Mix experience?{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="readyMixYes"
                          value="Yes"
                          {...register("readyMixExperience", {
                            required: "Please complete this required field.",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="readyMixYes"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check" style={checkboxGroupStyle}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="readyMixNo"
                          value="No"
                          {...register("readyMixExperience")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="readyMixNo"
                        >
                          No
                        </label>
                      </div>
                      {errors.readyMixExperience && (
                        <small className="text-danger">
                          {errors.readyMixExperience.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="vehicleExperience" className="form-label">
                        What types of commercial vehicles have you driven in the
                        past? <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control textarea"
                        id="vehicleExperience"
                        rows="4"
                        {...register("vehicleExperience", {
                          required: "Please complete this required field.",
                        })}
                      />
                      {errors.vehicleExperience && (
                        <small className="text-danger">
                          {errors.vehicleExperience.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="startDate" className="form-label">
                        When can you start?{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control input"
                        id="startDate"
                        {...register("startDate", {
                          required: "Please complete this required field.",
                        })}
                      />
                      {errors.startDate && (
                        <small className="text-danger">
                          {errors.startDate.message}
                        </small>
                      )}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="consent">
                        By completing this form and submitting it, you consent
                        to receive e-mails, phone calls, and/or text/SMS
                        messaging pertaining to job opportunities at Kennedy
                        Concrete.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary d-flex justify-content-center align-items-center mt-5 mb-4"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
