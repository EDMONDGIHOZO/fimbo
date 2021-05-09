import Head from "next/head";
import Image from "next/image";
import styles from "../shared/Home.module.css";
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FINAPP</title>
        <meta name="description" content="income and expenses management app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
      </main>

      <Footer />
    </div>
  );
}
