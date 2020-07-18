import { useCallback, useContext, useState } from 'react';
import LoginContext from '../context/LoginContext';
import loginService from '../services/login';
import { Login } from '../models/Login';

export default function useUser() {
  const { jwt, setJWT } = useContext(LoginContext);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ user, password }: Login) => {

      let isError : boolean = false;
      setState({ loading: true, error: false });
      loginService({ user, password })
        .then((jwt) => {
          console.log("jwt", jwt)
          window.sessionStorage.setItem('jwt', jwt);
          setJWT(jwt);
        })
        .catch((err) => {
          window.sessionStorage.removeItem('jwt');
          isError = true;
        }).finally(()=>{
          setState({ loading: false, error: isError });
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT('');
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
  };
}
