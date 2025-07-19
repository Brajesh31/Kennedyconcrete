import React from "react";
import Button from "../Buttons/Button";
const VideoCard = ({
  video_text,
  video_title,
  video_para,
  video_link,
  text,
  className,
  padding,
  btn_url,
}) => {
  return (
    <div>
      <section>
        <div className={padding}>
          <div className="container-fluid d-flex justify-content-center align-items-center w-100">
            <div className="container">
              <div className="row w-100">
                <div
                  className={`col-lg-6 col-md-6 iframe ${className} `}
                  id="video_card"
                >
                  <iframe
                    width="585"
                    height="329"
                    src={video_link}
                    title="Concrete Delivery Project Pour"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="col-lg-6 col-md-6" id="video_card">
                  <p className="mb-3 text text-uppercase">{video_text}</p>
                  <h1 className="mb-3">{video_title}</h1>

                  <div className="mb-3">
                    <p className="mb-3 para">{video_para}</p>
                  </div>
                  <div className="mb-4 mt-5">
                    <Button
                      bgColor="#DE0B18"
                      textColor="#fff"
                      icon={true}
                      text={text}
                      href={btn_url}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoCard;
