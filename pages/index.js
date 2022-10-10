import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import markdown from "../utils/markdown";
import { useEffect, useState } from "react";

function createMarkup(string) {
  return { __html: `${string}` };
}

export default function Home() {
  const [string, setString] = useState("");

  useEffect(() => {
    markdown(setString);
  }, []);
  return <div dangerouslySetInnerHTML={createMarkup(string)} />;
}
