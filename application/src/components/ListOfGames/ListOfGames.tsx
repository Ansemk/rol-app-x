import React from 'react';
import { Game } from '../../models/Game';

import GameComponent from '../Game/Game';
import './ListOfGames.scss';

type ListOfGamesParams = {
  games: Array<Game>;
};

export default function ListOfGames({ games }: ListOfGamesParams) {
  return (
    <div className="game-list">
      {games.map(({ _id, name, numberOfPlayers }) => (
        <GameComponent
          id={_id}
          name={name}
          numberOfPlayers={numberOfPlayers}
        ></GameComponent>
      ))}
    </div>
  );
}
