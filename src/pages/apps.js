import Head from "next/head";
import Header from "../Header";

export default function Apps() {
  return (
    <>
      <Head>
        <title>Hi! I'm Rapha ...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <h1>Apps!</h1>
      </main>
    </>
  );
}
