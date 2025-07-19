import React from "react";
import LocationContainer from "../../../Components/LocationContainer/LocationContainer";
import Teams from "../../../Components/TeamComponent/Teams";
import Testimonials from "../../../Components/Testimonials/Testimonials";
import ConnectCard from "../../../Components/ConnectCard/ConnectCard";
import WhyConcrete from "./WhyConcrete";
import OurServices from "./OurServices";
const Location = () => {
  return (
    <>
      {/* <LocationContainer img={Truck} /> */}
      <WhyConcrete />
      {/* <OurServices /> */}
      <Teams />
      <Testimonials />
      <ConnectCard />
    </>
  );
};

export default Location;
