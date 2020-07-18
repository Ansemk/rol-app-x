import React, { ReactNode, useState, Dispatch, SetStateAction, useEffect, useContext } from 'react';
import { User, IUser } from '../models/User';
import { getGames } from '../services/getGames';
import LoginContext from './LoginContext'
import { Game } from '../models/Game';

interface IProps {
  children: ReactNode;

}

interface IContextPropsUser {
  user: IUser;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = React.createContext({} as IContextPropsUser);

export default UserContext;

export function UserContextProvider({ children }: IProps) {
  
  const [user, setUser] = useState(new User());
  const [games, setGames] = useState([] as Array<Game>);
  const {jwt} = useContext(LoginContext);


  useEffect(() => {
    if (!jwt) 
        return setGames([])
    getGames({jwt}).then(setGames)
  }, [jwt])


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
