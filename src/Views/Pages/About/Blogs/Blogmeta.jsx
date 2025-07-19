import axios from "axios";
import React, { useEffect, useState } from "react";

const Blogmeta = () => {
  const [blogmeta, setBlogmeta] = useState([]);

  const fetchingData = async () => {
    try {
      const response = await axios.get("/JSON/Blogmeta.json");
      setBlogmeta(response.data);
      // console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchingData();
  });

  return (
    <>
      {blogmeta &&
        blogmeta.map((item, id) => {
          return (
            <div key={id} className="d-flex">
              <div className="blog-meta">
                <a href="#" className="icon-container">
                  <i class={item.icon}></i>
                  {item.text}
                </a>
                {/* <a href="#" className="icon-container">
                  <i class={item.icon}></i>
                  {item.text}

                </a> */}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Blogmeta;
