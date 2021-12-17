import { useState } from 'react';
import { Gesture } from '../../types';
import Layout from '../components/layout';
import Result from '../components/result';
import { play } from '../helpers/pages/game';
import { gestures } from '../helpers/pages/gestures';
import styles from '../styles/Game.module.css';

export default () => {
  const [games, setGames] = useState([]);

  const playGame = async (gesture: Gesture) => {
    const result = await play(gesture);
    setGames((prior) => [result, ...prior]);
  };

  const gestureButtons = gestures.map((gesture) => (
    <button
      className={styles.button}
      key={gesture}
      onClick={() => playGame(gesture)}
    >
      {gesture}
    </button>
  ));
  const results = games.map((result, i) => <Result key={i} result={result} />);

  return (
    <Layout>
      {gestureButtons}

      <div className={styles.results}>{games.length > 0 && results}</div>
    </Layout>
  );
};
