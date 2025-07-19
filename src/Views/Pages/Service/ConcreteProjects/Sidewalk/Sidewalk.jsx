import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";
const Sidewalk = () => {
  const [sidewalkData, setsideWalk] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/sidewalk");
      setsideWalk(response.data[0]);
      // console.log(response.data[0]);
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
        backgroundImage={sidewalkData.heroimg}
        title={sidewalkData.herotitle}
      />

      <VideoCard
        padding={"mt-5 mb-5"}
        className="d-flex justify-content-center align-items-center"
        video_link={sidewalkData.video_link}
        video_text={sidewalkData.title}
        video_title={sidewalkData.sub_title}
        video_para={sidewalkData.para}
        btn_text={sidewalkData.btn_text}
        btn_url={sidewalkData.btn_link}
      />
    </>
  );
};

export default Sidewalk;
