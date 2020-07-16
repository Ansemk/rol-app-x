import React, { ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { User, IUser } from '../models/User';

interface IProps {
  children: ReactNode;

}

interface IContextProps {
  user: IUser;
  setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = React.createContext({} as IContextProps);

export default UserContext;

export function UserContextProvider({ children }: IProps) {
  
  const [user, setUser] = useState(
    new User({ name: 'David', apellido: 'Cañamares' })
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
