import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FINAPP</title>
        <meta name="description" content="income and expenses management app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://finapp-mu.vercel.app/">Finapp</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <h1> Finapp 2021</h1>
      </footer>
    </div>
  );
}
