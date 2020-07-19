import React from 'react';
import './Game.scss';

export default function Game({ id, name, numberOfPlayers }: any) {
  return (
    <div key={id} className="game-item">
      <div className="game-item__icon">
          <img src="data:image/png;base64,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"></img>
      </div>
      <div className="game-item__content">
        <h2>{name}</h2>
        <p>Descripcion</p>
        <span>♛{numberOfPlayers}</span>
      </div>
      <div className="game-item__options"><span>🧸</span></div>
    </div>
  );
}
