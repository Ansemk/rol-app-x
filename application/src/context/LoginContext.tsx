import React, {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from 'react';


interface IContextPropsLogin {
  jwt: string;
  setJWT: Dispatch<SetStateAction<string>>;
}

const Context = createContext({} as IContextPropsLogin);

export function LoginContextProvider({ children }: any) {
  const [games, setGames] = useState([]);
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem('jwt') || ''
  );

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
