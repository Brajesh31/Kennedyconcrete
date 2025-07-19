import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";

const Commercial = () => {
  const [commercial, setCommercial] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/commercial");
      setCommercial(response.data[0]);
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
        title={commercial.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${commercial.heroimg}`}
      />

      <VideoCard
        padding={"mt-5 mb-4"}
        video_link={commercial.video_link}
        video_text={commercial.title}
        video_title={commercial.sub_title}
        video_para={commercial.para}
      />
    </>
  );
};

export default Commercial;
