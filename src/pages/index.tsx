import type { NextPage } from "next";
import Head from "next/head";
import InfiniteScrolling from "@src/components/infinite-scrolling";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Infinite Scroller</title>
        <meta name="description" content="Infinite scroller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfiniteScrolling />
    </>
  );
};

export default Home;
