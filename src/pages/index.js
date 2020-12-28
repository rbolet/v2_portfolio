import Head from "next/head";
import styles from "../Home/styles/Home.module.css";
import Header from "../Header";
import Title from "../Home/components/Title";
import Chatbot from "../Home/components/chatbot/Chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi! I'm Rapha ...</title>
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
