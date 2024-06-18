import Head from 'next/head';
import { useEffect } from 'react';
import GameComponent from '../components/GameComponent';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mondians TAP Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Mondians TAP Game!</h1>
        <GameComponent />
      </main>
    </div>
  );
}
