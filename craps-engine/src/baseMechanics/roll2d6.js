import { rollDie } from './rollDie';

export const roll2d6 = () => {
  // TODO: remove magic numbers
  return [rollDie(6), rollDie(6)]
};
