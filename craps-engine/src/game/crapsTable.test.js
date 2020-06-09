import { crapsTable } from './crapsTable';
import { betType } from '../bets/betType';

describe('crapsTable', () => {
  describe('players', () => {
    it('should add new players', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will');
      const players = table.getPlayers();
      expect(players[playerId].displayName).toEqual('Will');
    });
    it('should add new players with balance', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will', 100);
      const players = table.getPlayers();
      expect(players[playerId].balance).toEqual(100);
    });
    it('should remove players', () => {
      const table = crapsTable();
      let players = table.getPlayers();
      expect(players[0]).toBeFalsy();
      const playerId = table.addPlayer('Will');
      players = table.getPlayers();
      expect(players[playerId]).toBeTruthy();
      table.removePlayer(playerId);
      players = table.getPlayers();
      expect(players[playerId]).toBeFalsy();
    });
    it('should add to players existing balance', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will', 200);
      const newBalance = table.adjustPlayerBalance(playerId, 100);
      expect(newBalance).toEqual(300);
    });
    it('should subtract from players existing balance', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will', 200);
      const newBalance = table.adjustPlayerBalance(playerId, -100);
      expect(newBalance).toEqual(100);
    });
    it('should set players balance', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will', 200);
      table.setPlayerBalance(playerId, 600);
      expect(table.getPlayers()[playerId].balance).toEqual(600);
    });
  });
  describe('bets', () => {
    it('should place new bets', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will');
      const expected = {
        playerId,
        type: betType.dontPass,
        amount: 10
      };
      table.placeBet(expected.playerId, expected.type, expected.amount);
      expect(table.getBets()[0]).toEqual(expected);
    });
  });
  xdescribe('roll', () => {
    it('should play the game', () => {
      const table = crapsTable();
      const playerId = table.addPlayer('Will');
      const gab = table.addPlayer('Gab');
      const expected = {
        playerId,
        type: betType.dontPass,
        amount: 10
      };
      table.placeBet(gab, betType.pass, 10);
      table.placeBet(expected.playerId, expected.type, expected.amount);
      while(table.getBets().length) {
        table.roll();
      }
    });
  });
});