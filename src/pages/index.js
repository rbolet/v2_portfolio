import Head from "next/head";
import styles from "../Home/styles/Home.module.css";
import Title from "../Home/components/Title";
import Chatbot from "../Home/components/chatbot/Chatbot";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hi! I'm Rapha ...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className={styles.header} />
      <main className={styles.beforeFold}>
        <section className={styles.row}>
          <Title />
          <Chatbot />
        </section>
      </main>
    </>
  );
}
