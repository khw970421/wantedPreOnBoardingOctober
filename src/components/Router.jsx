import React from "react";

const Router = ({ children }) => {
  // 자식 태그들중에 path가 현재 pathname과 같은 것만 리턴
  return (
    <>
      {children.filter(({ props }) => {
        return props.path === window.location.pathname;
      })}
    </>
  );
};

export default Router;
