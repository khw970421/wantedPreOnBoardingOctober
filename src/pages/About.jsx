import React, { useState } from "react";
import useRouter from "../utils/useRouter";

const About = () => {
  const [router, setRouter] = useState("about");
  const { path } = useRouter();

  // path를 통해 window.history.pushState 실행 및 router 상태값 변경
  const goRoot = () => {
    path(routing[router]);
    setRouter(routing[router]);
  };

  // 뒤로가기나 클릭시 goAbout 실행
  window.onpopstate = () => {
    goRoot();
  };

  return (
    <div>
      <div>{router}</div>
      <button onClick={goRoot}>{routingBtn[router]}</button>
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

export default About;
