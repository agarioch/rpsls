import React from 'react';
import styles from '../styles/Result.module.css';

export default function Result({ result }) {
  return (
    <div className={styles.result}>
      <h1>{result.result}</h1>
      <p>
        <span>{`💪 ${result.playerGesture}`}</span>
        <span> vs. </span>
        <span>{`🤖 ${result.computerGesture}`}</span>
      </p>
    </div>
  );
}
