import Head from "next/head";
import Header from "../shared/Header";
import Title from "../Home/components/Title";
import Chatbot from "../Home/components/chatbot/Chatbot";
import styles from "../Home/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Who Is Rapha?</title>
        <meta name="title" content="Who Is Rapha?" />
        <meta
          name="description"
          content="Meet Rapha, Full Stack JavaScript Developer: React | React Native | Node/Express"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Who Is Rapha?" />
        <meta
          property="og:description"
          content="Meet Rapha, Full Stack JavaScript Developer: React | React Native | Node/Express"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Who Is Rapha?" />
        <meta
          property="twitter:description"
          content="Meet Rapha, Full Stack JavaScript Developer: React | React Native | Node/Express"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={styles.beforeFold}>
        <Title />
        <Chatbot />
      </main>
    </>
  );
}
