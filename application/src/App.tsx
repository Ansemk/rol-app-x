import React from 'react';
import { Route, Link } from 'wouter';
import logo from './logo.svg';
import LoginPage from './pages/Login/index';
import HomePage from './pages/Home/index';
import './assets/App.scss';
import 'ui-lib';
import { UserContextProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <section className="App-content">
          <Route component={LoginPage} path="/login" />
          <Route component={HomePage} path="/" />

          <Link className="App-link" to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </section>
      </UserContextProvider>
    </div>
  );
}

export default App;
