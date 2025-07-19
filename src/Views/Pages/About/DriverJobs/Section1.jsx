// import React, { useState } from "react";

const Section1 = () => {
  return (
    <>
      <section className="d-flex justify-content-center flex-column align-items-center driver-jobs-main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 driver-jobs">
              <div className="driver-container">
                <div className="driver-jobs-title mb-3">
                  <h2>Join Our Team </h2>
                </div>
                <h1 className="mb-2">LOCAL CLASS A & B CDL DRIVERS</h1>
                <p className="driver-jobs-para mb-2 mt-2">
                  Kennedy Concrete is now hiring highly motivated,honest, and
                  dedicated team-players for Local Class A CDL and Local Class B
                  CDL Driver positions. If you are looking for a family
                  environment where our superior work atmosphere is a way of
                  life, then you have come to the right place!
                </p>
                <h5 className="driver-jobs-subtitle mt-3">
                  <strong>Driver Appreciation Week</strong>
                </h5>
                <p className="driver-jobs-para mt-3">
                  Our drivers are the most important part of our operation. This
                  week we took some time to show them how much we appreciate
                  them. This is what we do! If you are a highly motivated,
                  honest, and dedicated individual looking to join our team,
                  apply today and see why Kennedy Concrete is the right place
                  for you.
                </p>
                <iframe
                  className="mt-4"
                  width="540"
                  height="304"
                  src="https://www.youtube.com/embed/9HMrx3CEb94"
                  title="Driver Appreciation Week"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 driver-jobs mt-5">
              {/* <div className="driver-container"></div> */}
              <div id="driver-jobs">
                <h5>Qualifications</h5>
                <ol className="driver-jobs-list ps-5">
                  <li>Have a valid CDL-A or CDL-B license (not mandatory)</li>
                  <li>
                    Experience driving 10-speed manual transmission is desired.
                  </li>
                </ol>
                <h5>Job Benfits</h5>
                <ol className="driver-jobs-list ps-5">
                  <li>LOCAL – Home Every Night</li>
                  <li>
                    Competitive Starting Wage (earn over $40K – $60K/year)
                  </li>
                  <li>Paid Vacation</li>
                  <li>Paid Holidays (9)</li>
                  <li>401k with company match!</li>
                  <li>
                    Comprehensive Health & Dental Insurance Package, as well as
                    other benefits including Tuition Reimbursement
                  </li>
                  <li>Excellent Fleet</li>
                  <li>Safety Conscious Company</li>
                  <li>Courteous Experienced Dispatchers</li>
                  <li>Cross-Training and Advancement Opportunities</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
