import React from "react";
import fs from "fs";
import { useEffect, useState } from "react";
import markdown from "../utils/markdown";

function createMarkup(string) {
  return { __html: `${string}` };
}

const Id = (props) => {
  const [string, setString] = useState("");
  useEffect(() => {
    markdown(setString, "# Hello, Neptune!");
  }, []);
  return <div dangerouslySetInnerHTML={createMarkup(string)} />;
};

export const getServerSideProps = async () => {
  // Todos : 파일 전달
  let fileData = "";
  fs.readFile(`__posts/1.md`, "utf-8", (err, data) => {
    if (err) return console.log(err);
    fileData = data;
  });

  return {
    props: { fileData },
  };
};

export default Id;
