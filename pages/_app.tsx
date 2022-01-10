import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Discord Channel Durations</title>
        <meta name="description" content="Discord-bot frontend" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
