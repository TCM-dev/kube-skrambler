import { randomIntFromInterval } from './helpers';

type Move = 'U' | 'F' | 'R' | 'B' | 'L' | 'D';
type Variation = '' | '2' | "'";

export const scramblerWCA = () => {
  const length = 20;
  const moves: Move[] = ['U', 'F', 'R', 'B', 'L', 'D'];
  const variations: Variation[] = ['', '2', "'"];
  const scrambleArray = [];
  let lastMove: Move | undefined = undefined;

  for (let index = 0; index < length; index++) {
    const availableMoves = moves.filter((move) => move !== lastMove);

    const newMove = availableMoves[randomIntFromInterval(0, availableMoves.length - 1)];
    const variation = variations[randomIntFromInterval(0, variations.length - 1)];

    scrambleArray.push(newMove + variation);
    lastMove = newMove;
  }

  return scrambleArray.join(' ');
};