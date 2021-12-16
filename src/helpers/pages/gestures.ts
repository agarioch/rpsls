import { Gesture } from "../../../types";

const gestures: Gesture[] = ["scissors", "paper", "rock", "lizard", "spock"];

const gestureBeats = {};
// create mapping of gesture to gestures they beat e.g. rock: [spock, paper]
gestures.forEach((gesture, index) => {
  const next = (index + 1) % gestures.length;
  const third = (index + 3) % gestures.length;
  gestureBeats[gesture] = [gestures.at(next), gestures.at(third)];
});

export { gestures, gestureBeats };
