import React, {useState, Dispatch, SetStateAction} from 'react'
import { Game, IGame } from '../models/Game'

interface IContextPropsGames {
  games: Array<IGame>;
  setGames: Dispatch<SetStateAction<Array<IGame>>>;
}

const Context = React.createContext({} as IContextPropsGames)

export function  GamesContextProvider ({children}: any) {
  const [games, setGames] = useState([] as Array<IGame>)

  return <Context.Provider value={{games, setGames}}>
    {children}
  </Context.Provider>
}

export default Context