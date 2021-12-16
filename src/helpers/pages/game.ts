import { Gesture } from '../../../types';

export const play = async (gesture: Gesture) => {
  try {
    const response = await fetch('/api/rounds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gesture }),
    });
    return response.json();
  } catch (err) {
    return { Error: err };
  }
};
