import React, { useEffect, useState } from "react";
import Hero from "../../../Components/Hero/Hero";
import VideoCard from "../../../Components/VideoCard/VideoCard";
import axios from "axios";
// import Map from "../../../Components/Map/Map";
const ConcreteDeliveryService = () => {
  const [concreteDelivery, setConcreteDelivery] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/delivery");

      setConcreteDelivery(response.data[0]);
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
        title={concreteDelivery.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${concreteDelivery.heroimg}`}
      />

      <VideoCard
        video_link={concreteDelivery.video_link}
        video_text={concreteDelivery.title}
        video_title={concreteDelivery.sub_title}
        video_para={concreteDelivery.para}
        text={concreteDelivery.btn_text}
      />
    </>
  );
};

export default ConcreteDeliveryService;
