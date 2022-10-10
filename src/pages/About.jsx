import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div>about</div>
      <button onClick={() => navigate("/")}>root</button>
    </div>
  );
};

export default About;
