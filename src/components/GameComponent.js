import React, { useState, useEffect } from 'react';
import { getUserData, recvTapAction } from '../lib/ton';
import { sendMessage } from '../utils/telegram';
import styles from '../styles/GameComponent.module.css';

const GameComponent = () => {
  const [coins, setCoins] = useState(0);
  const [spins, setSpins] = useState(0);
  const [chatId, setChatId] = useState('');

  useEffect(() => {
    // Fetch initial user data
    const fetchData = async () => {
      const data = await getUserData(1); // Assuming user_id = 1
      setCoins(data.coins);
      setSpins(data.spins);
    };
    fetchData();
  }, []);

  const handleTap = async () => {
    try {
      await recvTapAction(1); // Assuming user_id = 1
      setCoins(coins + 1);
      // Send a Telegram message
      if (chatId) {
        await sendMessage(chatId, `You have earned a coin! Total coins: ${coins + 1}`);
      }
    } catch (error) {
      console.error('Error tapping to earn coins:', error);
    }
  };

  return (
    <div className={styles.gameContainer}>
      <h2 className={styles.info}>You have <span className={styles.coins}>{coins}</span> coins</h2>
      <h2 className={styles.info}>You have <span className={styles.spins}>{spins}</span> spins</h2>
      <input
        type="text"
        placeholder=""
        value={chatId}
        onChange={(e) => setChatId(e.target.value)}
        className={styles.chatInput}
      />
      <img
        src="/assets/images/tap-image.png"
        alt="Tap to earn coins"
        className={styles.tapImage}
        onClick={handleTap}
      />
    </div>
  );
};

export default GameComponent;
