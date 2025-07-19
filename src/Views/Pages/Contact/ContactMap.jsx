import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactMap = () => {
  const iframe =
    "https://www.google.com/maps/d/embed?mid=1bG31d7cgIIW4g2-JDF1zMo8VAcO8jBI&ehbc=2E312F";

  const socialLinks = [
    { name: "Facebook", iconClass: "fa-facebook", url: "#" },
    { name: "Twitter", iconClass: "fa-x-twitter", url: "#" },
    { name: "YouTube", iconClass: "fa-youtube", url: "#" },
    { name: "Instagram", iconClass: "fa-instagram", url: "#" },
    { name: "LinkedIn", iconClass: "fa-linkedin", url: "#" },
  ];

  const [contact, setContact] = useState([]);
  console.log(contact);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contact");
      setContact(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="container-fluid d-flex justify-content-center align-items-center contact-map">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 map-container">
                <div className="d-flex justify-content-center">
                  <iframe
                    src={iframe}
                    width="100%"
                    height="479"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6 map-container">
                <div className="map-content">
                  <h2 className="text-uppercase mb-3">
                    {contact.contact_title}
                  </h2>
                  <h1 className="connect-title mb-3">
                    {contact.contact_secondtitle}
                  </h1>
                  <div>
                    <p className="connect-para mb-3">
                      {contact.contact_paraone}
                    </p>
                    <p className="connect-para mb-3">
                      {contact.contact_paratwo}
                    </p>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    {socialLinks.map((social, index) => (
                      <div
                        key={index}
                        className="social-media border d-flex justify-content-center align-items-center"
                      >
                        <i
                          className={`fa-brands ${social.iconClass} fs-6`}
                          title={social.name}
                        ></i>
                      </div>
                    ))}
                  </div>

                  <div className="cards mt-5">
                    {contact?.locations?.map((item, index) => (
                      <div key={index}>
                        <h6 className="mb-2">{item.location}</h6>
                        <p className="mb-2 contact-phone">
                          <a href={`tel:${item.phone}`}>{item.phone}</a>
                        </p>
                        <p>
                          <a href={`mailto:${item.email}`}>{item.email}</a>
                        </p>
                      </div>
                    ))}
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

export default ContactMap;
