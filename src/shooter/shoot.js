import { roll2d6 } from '../baseMechanics/roll2d6';
import { defineShooterRoll } from './defineShooterRoll';

export const shoot = (point) => {
  const roll = roll2d6();
  return {
    roll,
    value: roll[0] + roll[1],
    outcome: defineShooterRoll(roll[0] + roll[1], point)
  }
}