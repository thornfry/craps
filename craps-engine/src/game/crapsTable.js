import { gameRound } from './gameRound';

export const crapsTable = () => {
  let players = {};
  let bets = [];
  const game = gameRound();

  // #region players
  const addPlayer = (displayName, balance = 0) => {
    const key = Object.keys(players).length;
    players[key] = {
      displayName,
      balance
    }
    return key;
  }

  const removePlayer = (playerId) => {
    delete players[playerId];
  }

  const adjustPlayerBalance = (playerId, deposit) => {
    const player = players[playerId];
    if (!player) { return; }
    const balance = player.balance ? player.balance + deposit : deposit;
    players[playerId] = {
      ...player,
      balance
    }
    return balance;
  }

  const setPlayerBalance = (playerId, balance) => {
    const player = players[playerId];
    if (!player) { return; }
    players[playerId] = {
      ...player,
      balance
    }
  }
  // #endregion
  
  // #region bets
  const placeBet = (playerId, type, amount, point) => {
    bets.push({ playerId, type, amount, point })
  }

  // #endregion

  // #region game round
  const roll = () => {
    // console.log('Rolling!')
    const resolvedBets = game.rollAndPayout(bets);
    const lastRoll = game.getLastRoll();
    console.log('Player rolled: ', lastRoll);
    const completed = resolvedBets.filter(x => x.payout !== undefined);
    const liveBets = resolvedBets.filter(x => x.payout === undefined);
    completed.forEach(x => {
      console.log(`Paying out ${x.payout} to Player[${x.playerId}]`);
      adjustPlayerBalance(x.playerId, x.payout);
    })
    bets = liveBets;
    return lastRoll;
  }
  // #endregion

  return {
    addPlayer,
    removePlayer,
    getPlayers: () => players,
    getPlayer: (playerId) => players[playerId],
    adjustPlayerBalance,
    setPlayerBalance,
    placeBet,
    removeBet: () => { },
    getBets: () => bets,
    roll
  }
}