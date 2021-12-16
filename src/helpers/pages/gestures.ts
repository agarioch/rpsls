import { Gesture } from "../../../types";

const gestures: Gesture[] = ["rock", "paper", "scissors", "lizard", "spock"];

const gestureBeats = {};
// create mapping of gesture to gestures they beat e.g. rock: [spock, paper]
gestures.forEach((gesture, index) => {
  const next = (index + 1) % gestures.length;
  const prior = index - 1;
  gestureBeats[gesture] = [gestures.at(prior), gestures.at(next)];
});

export { gestures, gestureBeats };
