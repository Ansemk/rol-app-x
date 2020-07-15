import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import LoginPage from './components/LoginPage';
import './assets/App.scss';
import 'ui-lib';

const arraySample = ['HOLA', 'ADIOS'];

function App() {
  const [array, setArray] = useState(arraySample);
  const [userInput, setUserInput] = useState({
    type: 'text',
    error: 'Esto es un error',
  });

  useEffect(() => {
    const userInputUpdate = {
      type: 'email',
      error: 'Esto es otro error',
    };

    setUserInput(userInputUpdate);
  }, []); // de mome

  return (
    <div className="App">
      <section className="App-content">
        <img src={logo} className="App-logo" alt="logo" />

        {array.map((key) => (
          <div key={key}>{key}</div>
        ))}

        <LoginPage></LoginPage>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
    </div>
  );
}

export default App;
