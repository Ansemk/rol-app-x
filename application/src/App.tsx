import React from 'react';
import { Route, Link } from 'wouter';
import logo from './logo.svg';
import LoginPage from './pages/Login/index';
import HomePage from './pages/Home/index';
import GamesPage from './pages/Games/index';
import './assets/App.scss';
import 'ui-lib';
import { UserContextProvider } from './context/UserContext';
import { LoginContextProvider } from './context/LoginContext';
import { GamesContextProvider } from './context/GamesContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <section className="App-content App-content--white">
          <LoginContextProvider>
            <Route component={LoginPage} path="/login" />
          </LoginContextProvider>
          <GamesContextProvider>
            <Route component={HomePage} path="/" />
            <Route component={GamesPage} path="/games" />
          </GamesContextProvider>

         {/*  <Link className="App-link" to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link> */}
        </section>
      </UserContextProvider>
    </div>
  );
}

export default App;
