import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";
const ShotCreate = () => {
  const [ShotCreate, setShotCreate] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/shotcreate");
      setShotCreate(response.data[0]);
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
        title={ShotCreate.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${ShotCreate.heroimg}`}
      />

      <VideoCard
        padding={"mt-5 mb-5"}
        // className="d-flex justify-content-center align-items-center"
        video_link={ShotCreate.video_link}
        video_text={ShotCreate.title}
        video_title={ShotCreate.sub_title}
      />
    </div>
  );
};

export default ShotCreate;
