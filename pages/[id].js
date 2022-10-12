import React from "react";
import fs from "fs";
import { useEffect, useState } from "react";
import markdown from "../utils/markdown";

function createMarkup(string) {
  return { __html: `${string}` };
}

const Id = ({ fileData }) => {
  const [string, setString] = useState("");
  useEffect(() => {
    markdown(setString, fileData);
  }, []);
  return <div dangerouslySetInnerHTML={createMarkup(string)} />;
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths(props) {
  var files = fs.readdirSync("__posts");
  return {
    paths: files.map((file) => ({
      params: {
        id: file,
      },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params }) {
  const fileData = fs.readFileSync(`__posts/${params.id}`, "utf-8");
  return {
    props: { fileData },
  };
}
export default Id;
