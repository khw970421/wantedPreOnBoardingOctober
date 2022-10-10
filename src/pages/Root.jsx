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

const Root = () => {
  const [router, setRouter] = useState("root");
  const goAbout = () => {
    useRouter(routing[router] === "root" ? "/" : `/${routing[router]}`);
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

export default Root;
