import { crapsTable } from 'craps-engine';

export const gameStateStub = () => {
  const table = crapsTable();
  const createGame = (displayName, balance = 0) => {
    return joinGame(0, displayName, balance);
  }
  const joinGame = (gameId, displayName, balance = 0) => {
    return table.addPlayer(displayName, balance);
  }
  const addChips = (playerId, deposit) => {
    return table.adjustPlayerBalance(playerId, deposit);
  }
  const placeBet = (playerId, type, amount) => {
    table.placeBet(playerId, type, amount);
    return table
      .getBets()
      .filter(x => x.playerId === playerId);
  }
  const roll = (playerId) => {
    const rollResult = table.roll();
    const balance = table.getPlayer(playerId).balance;
    const bets = table.getBets();
    console.log('stub: ', balance, bets)
    return {
      rollResult,
      balance,
      bets
    }
  }

  return {
    createGame,
    joinGame,
    addChips,
    placeBet,
    roll
  }
}