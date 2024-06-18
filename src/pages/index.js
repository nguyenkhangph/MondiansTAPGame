import Head from 'next/head';
import GameComponent from '../components/GameComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mondians TAP Game</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Mondians TAP Game!</h1>
        <GameComponent />
      </main>
    </div>
  );
}
