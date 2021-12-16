import { Gesture } from "../../../types";
import { gestures, gestureBeats } from "../pages/gestures";

export const playGame = ({ playerGesture }: { playerGesture: Gesture }) => {
  const computerGesture = gestures[Math.floor(Math.random() * gestures.length)];

  if (gestureBeats[playerGesture].includes(computerGesture))
    return "player wins!";
  if (gestureBeats[computerGesture].includes(playerGesture))
    return "computer wins!";
  return "draw!";
};
