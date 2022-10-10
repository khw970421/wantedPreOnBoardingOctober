import React from "react";

const Route = ({ path, component }) => {
  return <div>{window.location.pathname === path && component}</div>;
};

export default Route;
