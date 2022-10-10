import fs from "fs";
import { useRouter } from "next/router";

export default function Home({ files }) {
  const router = useRouter();
  return (
    <>
      {files.map((file, idx) => (
        <div key={idx} onClick={() => router.push(file)}>
          {file}
        </div>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  var files = fs.readdirSync("__posts");
  return {
    props: { files },
  };
};
