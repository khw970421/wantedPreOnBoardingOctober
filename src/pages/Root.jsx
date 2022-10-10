import React, { useState } from "react";
import useRouter from "../utils/useRouter";

const Root = () => {
  const [router, setRouter] = useState("root");
  const { path } = useRouter();

  const goAbout = () => {
    path(routing[router]);
    setRouter(routing[router]);
  };

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
