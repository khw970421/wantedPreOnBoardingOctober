import React, { useState } from "react";
import useRouter from "../utils/useRouter";

const routing = {
  about: "root",
  root: "about",
};
const routingBtn = {
  about: "go main",
  root: "about",
};

const About = () => {
  const [router, setRouter] = useState("about");
  const goRoot = () => {
    useRouter(routing[router] === "root" ? "/" : `/${routing[router]}`);
    setRouter(routing[router]);
  };

  return (
    <div>
      <div>{router}</div>
      <button onClick={goRoot}>{routingBtn[router]}</button>
    </div>
  );
};

export default About;
