import { Gesture } from '../../../types';
import { gestures, gestureBeats } from '../pages/gestures';

export const playGame = ({ playerGesture }: { playerGesture: Gesture }) => {
  const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  let result = 'draw!';
  if (gestureBeats[playerGesture].includes(computerGesture))
    result = 'player wins!';
  if (gestureBeats[computerGesture].includes(playerGesture))
    result = 'computer wins!';

  return {
    playerGesture,
    computerGesture,
    result,
  };
};
