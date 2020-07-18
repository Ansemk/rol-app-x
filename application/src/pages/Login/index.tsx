import React, { useState, useCallback, FormEvent } from 'react';
import useLogin from '../../hooks/useLogin';
import 'ui-lib';
import { Login } from '../../models/Login';
import './Login.scss'

function LoginPage() {
  const { isLoginLoading, hasLoginError, login, isLogged } = useLogin();
  const [userInput, setUserInput] = useState({
    name: 'Email',
    value: 'hola',
    type: 'email',
    error: 'Error en usuario',
  });
  const [passwordInput, setPasswordInput] = useState({
    name: 'Contraseña',
    value: '',
    type: 'password',
    error: 'Error en contraseña',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Logando');
    login({ user: 'Usuario', password: 'holis' } as Login);
  };

  return (
    <div className="login-page">
      <div></div>
      <main>
        <span>Welcome to</span>
        <h1>Rolify</h1>
        <p>
          Create uniques and incredibles stories, and play them with your
          friends together
        </p>
      </main>

      <form onSubmit={handleSubmit}>
        <wd-input label="user" type={userInput.type}>
          <p slot="errorMsg" className="error-msg">
            {userInput.error}
          </p>
        </wd-input>
        <wd-input label="password" type="password">
          <p slot="errorMsg" className="error-msg">
            {passwordInput.error}
          </p>
        </wd-input>
        <button className="btn btn--primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
