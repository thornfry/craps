const rollDie = (dieFaces) => {
  // Magic +/- 1 is to avoid rolling zero
  return Math.floor(Math.random() * Math.floor(dieFaces - 1)) + 1;
}

export default rollDie;