import React, { useState } from "react";
import useRouter from "../utils/useRouter";

const Root = () => {
  const [router, setRouter] = useState("root");
  const { path } = useRouter();

  // path를 통해 window.history.pushState 실행 및 router 상태값 변경
  const goAbout = () => {
    path(routing[router]);
    setRouter(routing[router]);
  };

  // 뒤로가기나 클릭시 goAbout 실행
  window.onpopstate = () => {
    goAbout();
  };

  return (
    <div>
      <div>{router}</div>
      <button onClick={goAbout}>{routingBtn[router]}</button>
    </div>
  );
};

const routing = {
  about: "root",
  root: "about",
};
const routingBtn = {
  about: "go main",
  root: "about",
};

export default Root;
