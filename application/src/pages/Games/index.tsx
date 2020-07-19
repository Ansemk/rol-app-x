import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import ListOfGames from '../../components/ListOfGames/ListOfGames';

import CustomBar from '../../components/CustomBar/CustomBar';
import { useGames } from '../../hooks/useGames';

import 'ui-lib';

import './Games.scss';
import { Game, IGame } from '../../models/Game';

function GamesPage() {
  const { games, setGames } = useGames({});

  const [order, setOrder] = useState([
    ['Recently updated', 1],
    ['More players', 2],
    ['A to Z', 3],
    ['Z to A', 4],
  ]);

  const sortOrderAlpha = (prev: Game, next: Game) =>
    prev.name.toLocaleUpperCase() < next.name.toLocaleUpperCase() ? -1 : 1;

  const sortOrderModified = (prev: Game, next: Game) =>
    prev.modified > next.modified ? -1 : 1;

  const sortOrderNumberOfPlayers = (prev: Game, next: Game) =>
    prev.numberOfPlayers > next.numberOfPlayers ? -1 : 1;

  const handleOrder = (value: any) => {
    let gamesSorted: React.SetStateAction<Game[]> = [...games];
    let filterFunction: (prev: Game, next: Game) => number = (
      prev: Game,
      next: Game
    ) => {
      return 0;
    };

    switch (value) {
      case '1':
        filterFunction = sortOrderModified;
        break;
      case '2':
        filterFunction = sortOrderNumberOfPlayers;
        break;
      case '3':
        filterFunction = sortOrderAlpha;
        break;
      case '4':
        filterFunction = (prev: Game, next: Game) => sortOrderAlpha(next, prev);
    }

    console.log(gamesSorted.sort(filterFunction));
    setGames(gamesSorted.sort(filterFunction));
  };

  return (
    <div className="games-page">
      <div className="games-page__header">
        <h1>Games</h1>
        <span>
          {games.length} <small>games</small>
        </span>
      </div>
      <CustomBar
        order={order}
        defaultOrder={1}
        handleOrder={handleOrder}
      ></CustomBar>
      <ListOfGames games={games}></ListOfGames>
    </div>
  );
}

export default GamesPage;
