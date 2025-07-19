import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../../../Components/Hero/Hero";
import VideoCard from "../../../Components/VideoCard/VideoCard";

const InstantQuote = () => {
  const [videoText, setVideoText] = useState("");

  const fetchingInstantQuaote = async () => {
    try {
      const response = await axios.get("http://localhost:5000/instant");
      setVideoText(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingInstantQuaote();
  }, []);

  return (
    <>
      <Hero title={videoText.Herotitle} />

      <VideoCard
        video_link={"https://www.youtube.com/embed/e10NtXagn0I"}
        video_text={videoText.subtitle}
        video_title={videoText.title}
        video_para={videoText.text}
        btn_text={videoText.btntext}
      />
    </>
  );
};

export default InstantQuote;
