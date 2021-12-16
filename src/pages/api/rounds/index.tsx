import { playGame } from '../../../helpers/api/rounds';

export default (req, res) => {
  const { gesture } = req.body;

  const result = playGame({ playerGesture: gesture });

  res.status(200);
  res.json(result);
  res.end();
};
