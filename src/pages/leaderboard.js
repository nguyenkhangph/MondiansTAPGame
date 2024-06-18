import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Leaderboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Leaderboard</h1>
        <p>This is the leaderboard page.</p>
      </main>
    </div>
  );
}
