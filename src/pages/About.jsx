import React, { useState } from "react";
import useRouter from "../utils/useRouter";

const About = () => {
  const [router, setRouter] = useState("about");
  const { path } = useRouter();

  const goRoot = () => {
    path(routing[router]);
    setRouter(routing[router]);
  };

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
