import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ListOfGames from '../../components/ListOfGames/ListOfGames';

import { useGames } from '../../hooks/useGames';

import 'ui-lib';


import './Games.scss'

function GamesPage() {
  const { user, setUser } = useContext(UserContext);
  const { games, setGames } = useGames({});

  return (
    <div className="games-page">
      <div className="games-page__header">
        <h1>Games</h1>
        <span>{games.length} <small>games</small></span>
      </div>

      <ListOfGames games={games}></ListOfGames>
    </div>
  );
}

export default GamesPage;
