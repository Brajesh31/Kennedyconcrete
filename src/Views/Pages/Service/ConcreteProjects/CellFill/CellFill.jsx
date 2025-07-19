import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";

const CellFill = () => {
  const [cellfill, setCellfill] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cellfill");
      setCellfill(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Hero
        title={cellfill.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${cellfill.heroimg}`}
      />

      <VideoCard
        padding={"mt-0 mb-4"}
        video_link={cellfill.video_link}
        video_text={cellfill.title}
        video_title={cellfill.sub_title}
        video_para={cellfill.para}
      />
    </div>
  );
};

export default CellFill;
