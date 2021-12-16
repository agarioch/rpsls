import React from 'react';
import styles from '../styles/Game.module.css';

export default function Result({ result }) {
  return (
    <div>
      <h1 className={styles.result}>{result.result}</h1>
      <p>
        {result.playerGesture} {result.computerGesture}
      </p>
    </div>
  );
}
