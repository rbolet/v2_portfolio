import Head from "next/head";
import Header from "../shared/Header";
import styles from "../Apps/styles/Apps.module.css";

export default function Apps() {
  return (
    <>
      <Head>
        <title>Hi! I'm Rapha ...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        <section className="apps">
          <div className={styles.appsContainer}>
            <div className={styles.appCard}></div>
            <div className={styles.appCard}></div>
            <div className={styles.appCard}></div>
            <div className={styles.appCard}></div>
          </div>
        </section>
      </main>
    </>
  );
}
