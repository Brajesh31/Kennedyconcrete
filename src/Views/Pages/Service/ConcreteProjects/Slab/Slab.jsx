import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";
const Slab = () => {
  const [slab, setslab] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/slab");
      setslab(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Hero
        title={slab.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${slab.heroimg}`}
      />

      <VideoCard
        className="d-flex justify-content-center align-items-center"
        padding={"mt-5 mb-4"}
        video_link={slab.video_link}
        video_text={slab.title}
        video_title={slab.sub_title}
        video_para={slab.para}
      />
    </>
  );
};

export default Slab;
