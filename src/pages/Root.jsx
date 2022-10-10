import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div>root</div>
      <button onClick={() => navigate("/about")}>about</button>
    </div>
  );
};

export default Root;
