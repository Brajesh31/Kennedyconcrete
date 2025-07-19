import React, { useEffect, useState } from "react";
import Hero from "../../../../Components/Hero/Hero";
import VideoCard from "../../../../Components/VideoCard/VideoCard";
import axios from "axios";
const DecorativeConcrete = () => {
  const [decorativeConcrete, setDecorativeConcrete] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/decorative");
      setDecorativeConcrete(response.data[0]);
      // console.log(response.data[0]);
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
        title={decorativeConcrete.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${decorativeConcrete.heroimg}`}
      />

      <VideoCard
        padding={"mt-3 pt-2 mb-5"}
        // className="d-flex justify-content-center align-items-center"
        video_link={decorativeConcrete.video_link}
        video_text={decorativeConcrete.title}
        video_title={decorativeConcrete.sub_title}
        video_para={
          <>
            <p>{decorativeConcrete.para}</p>
          </>
        }
      />
    </div>
  );
};

export default DecorativeConcrete;
