export const getOddsForPoint = (point, inverse = false) => {
  let odds;
  switch (point) {
    case 4:
    case 10:
      odds = 2;
      break;
    case 5:
    case 9:
      odds = 1.5;
      break;
    case 6:
    case 8:
      odds = 1.2;
      break;
    default:
      break;
  }
  return inverse ? 1 / odds : odds;
}