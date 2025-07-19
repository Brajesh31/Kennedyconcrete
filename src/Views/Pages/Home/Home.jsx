import React from "react";
import Connect from "./Connect";
import KennedyConcrete from "./KennedyConcrete";
import Team from "./Team";
import CustomSlider from "./Slider";

const Home = () => {
  return (
    <div>
      <CustomSlider />
      <KennedyConcrete />
      <Team />
      <Connect />
    </div>
  );
};

export default Home;
