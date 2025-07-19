import React, { useEffect, useState } from "react";
import Hero from "../../../Components/Hero/Hero";
import Section1 from "./Section1";
import axios from "axios";

const PreferredContractors = () => {
  const [contractors, setcontractors] = useState();

  const fetchingData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/preferredcontractors"
      );
      setcontractors(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      <Hero
        title={contractors?.herotitle}
        backgroundImage={`http://localhost:5000/uploads/${contractors?.heroimg}`}
      />

      <Section1 />
    </>
  );
};

export default PreferredContractors;
