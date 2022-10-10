import React from "react";

const Router = ({ children }) => {
  return (
    <>
      {children.filter(({ props }) => {
        return props.path === window.location.pathname;
      })}
    </>
  );
};

export default Router;
