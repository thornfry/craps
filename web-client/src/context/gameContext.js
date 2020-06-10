// Thank you Kent C. Dodds. I love you
import React from 'react'
import { gameStateStub } from '../services/gameStateStub';

const GameStateContext = React.createContext();
const GameDispatchContext = React.createContext();

const gameStateReducer = (state, action) => {
  switch (action.type) {
    case 'setPlayerId':
      return {
        ...state,
        playerId: action.payload
      }
    case 'setBalance':
      return {
        ...state,
        balance: action.payload
      }
    case 'setBets':
      return {
        ...state,
        bets: action.payload
      }
    case 'setRollResult':
      return {
        ...state,
        rollResult: action.payload
      }
    case 'update':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const GameStateProvider = ({ children }) => {
  const defaultState = {
    game: gameStateStub(),
    rollResult: {},
    bets: [],
    balance: 0
  }
  const [state, dispatch] = React.useReducer(gameStateReducer, defaultState)
  console.log('Provider state: ', state)
  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  )
}

const useGameState = () => {
  const context = React.useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider')
  }
  return context
}

const useGameDispatch = () => {
  const context = React.useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error('useGameDispatch must be used within a GameStateProvider')
  }
  return context
}

export {
  GameStateProvider,
  useGameDispatch,
  useGameState
}
