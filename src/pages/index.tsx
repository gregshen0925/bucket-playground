import { bucket } from "@/client/bucket";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const data = await bucket.getAllBottles();
      console.log(data);
    };
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>Bucket Playground</title>
        <meta name="description" content="Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
}
