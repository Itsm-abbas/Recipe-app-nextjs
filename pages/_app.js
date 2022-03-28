import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import "../styles/variables.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
