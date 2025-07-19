import React, { memo, useMemo } from "react";
import Button from "../../../Views/Components/Buttons/Button";
import Button2 from "../Buttons/Button2";

const Map = memo(
  ({ title, text, para, secpara, thirdpara, sectitle, fourpara }) => {
    // Memoize the iframe URL to prevent recreation on each render
    const iframeUrl = useMemo(
      () =>
        "https://www.google.com/maps/d/embed?mid=1bG31d7cgIIW4g2-JDF1zMo8VAcO8jBI&ehbc=2E312F",
      []
    );

    // Memoize iframe props to prevent unnecessary re-renders
    const iframeProps = useMemo(
      () => ({
        src: iframeUrl,
        width: "100%",
        height: "480",
        style: { border: 0 },
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        title: "Google Map",
      }),
      [iframeUrl]
    );

    return (
      <section className="py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <iframe {...iframeProps} />
              </div>

              <div className="col-lg-6 col-md-6 connect">
                <h6 className="text-danger fw-bold">{title}</h6>
                <h1 className="display-6 mt-4">{text}</h1>
                <p className="text">{para}</p>
                <p className="text">{secpara}</p>
                <p className="text">{thirdpara}</p>
                <h4 id="sec-title" className="mt-5">
                  <strong>{sectitle}</strong>
                </h4>
                <p className="text">{fourpara}</p>

                {/* button */}
                <div className="mt-5">
                  <Button2 text="Quote& Order" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Map;
