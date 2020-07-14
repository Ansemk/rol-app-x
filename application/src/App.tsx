import React from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import 'ui-lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
                    <wd-button></wd-button>
                    <wd-input type="email">
                      <p slot="errorMsg" className="error-msg" >Ha ocurrido un error</p>
                    </wd-input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
