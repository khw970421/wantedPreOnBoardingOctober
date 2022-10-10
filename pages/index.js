import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import markdown from "../utils/markdown";
import { useEffect, useState } from "react";
import fs from "fs";
import { useRouter } from "next/router";

function createMarkup(string) {
  return { __html: `${string}` };
}

export default function Home({ files }) {
  // console.log(files);
  const router = useRouter();
  // const [string, setString] = useState("");

  // useEffect(() => {
  //   markdown(setString);
  // }, []);
  // return <div dangerouslySetInnerHTML={createMarkup(string)} />;
  return (
    <>
      {files.map((file) => (
        <div onClick={() => router.push(file)}>{file}</div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  var files = fs.readdirSync("__posts");
  // files.forEach((file) => {
  //   fs.readFile(`__posts/${file}`, "utf-8", (err, data) => {
  //     if (err) return console.log(err);
  //     console.log(data);
  //   });
  // });

  return {
    props: { files },
  };
};
