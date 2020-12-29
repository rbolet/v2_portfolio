import Head from "next/head";
import Header from "../shared/Header";
import AppCard from "../Apps/components/AppCard";
import styles from "../Apps/styles/Apps.module.css";

export default function Apps() {
  return (
    <>
      <Head>
        <title>Hi! I'm Rapha ...</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={styles.beforeFold}>
        <section className="apps">
          <div className={styles.appsContainer}>
            <AppCard />
            <AppCard />
            <AppCard />
          </div>
        </section>
      </main>
    </>
  );
}
