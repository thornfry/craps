import { gameStateStub } from './gameStateStub';

describe('gameStateStub', () => {
  describe('player functions', () => {
    it('should create game', () => {
      const stub = gameStateStub();
      const playerId = stub.createGame('Will');
      expect(playerId).toEqual(0);
    });
    it('should join game', () => {
      const stub = gameStateStub();
      const playerId = stub.joinGame('Alabama');
      expect(playerId).toEqual(0);
    });
    it('should add chips', () => {
      const stub = gameStateStub();
      const playerId = stub.createGame('Will');
      expect(playerId).toEqual(0);
      const initialBalance = stub.addChips(0,0);
      expect(initialBalance).toEqual(0);
      const updatedBalance = stub.addChips(0, 200);
      expect(updatedBalance).toEqual(200);
    });
  });
  describe('bets', () => {
    it('should place bets and return all player-owned bets', () => {
      const stub = gameStateStub();
      const playerId = stub.joinGame('Alabama');
      const bet1 = {
        playerId,
        type: 'dontPass',
        amount: 10
      }
      let bets = stub.placeBet(playerId, bet1.type, bet1.amount)
      expect(bets).toEqual([bet1]);
      const bet2 = {
        playerId,
        type: 'dontPass',
        amount: 10
      }
      bets = stub.placeBet(playerId, bet2.type, bet2.amount)
      expect(bets).toEqual([bet1, bet2]);
    });
  });
  describe('roll', () => {
    it('should return the roll result', () => {
      const stub = gameStateStub();
      const playerId = stub.joinGame('Alabama');
      const { rollResult } = stub.roll(playerId);
      expect(rollResult.roll).toBeTruthy();
      expect(rollResult.value).toBeTruthy();
      expect(rollResult.outcome).toBeTruthy();
    });
    it('should return the player balance', () => {
      const stub = gameStateStub();
      const playerId = stub.joinGame('Alabama');
      const { balance } = stub.roll(playerId);
      expect(Number.isInteger(balance)).toEqual(true);
    });
    it('should return the live bets', () => {
      const stub = gameStateStub();
      const playerId = stub.joinGame('Alabama');
      const { bets } = stub.roll(playerId);
      expect(bets).toEqual([]);
    });
  });
});