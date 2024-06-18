import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mondians TAP Game</h1>
    </header>
  );
};

export default Header;
