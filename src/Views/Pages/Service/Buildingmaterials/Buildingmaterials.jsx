import React from "react";
import Hero from "../../../Components/Hero/Hero";
import About from "./About";
import "../../../../assets/CSS/Service.css";
import Map from "../../../Components/Map/Map";
import Apart from "./Apart";
const Buildingmaterials = () => {
  return (
    <>
      <Hero title={"Building Materials"} />

      <About />

      <Apart
        title="What Sets Us Apart"
        sub_title="Why Kennedy Concrete Is Your Trusted Partner"
      />

      <Map
        title="KENNEDY CONCRETE"
        text="Serving Florida Communities with Excellence"
        secpara="Kennedy Concrete is proud to support construction projects in Orlando, Tampa Ocala, and Brevard County."
        thirdpara="We currently also serve an 80-mile radius around Wildwood and will soon be expanding our service area into Fort Pierce and Port Charlotte, ensuring that more communities benefit from our reliable building materials and exceptional service."
        sectitle="Get Started with Kennedy Concrete Today"
        fourpara="Ready to simplify your building process with top-tier materials and expert support? Contact us or to get a quote and experience the Kennedy Concrete difference."
      />
    </>
  );
};

export default Buildingmaterials;
