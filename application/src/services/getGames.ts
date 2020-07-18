import { Game } from '../models/Game';

const ENDPOINT = 'http://localhost:3000/api';

export async function getGames({ userId }: any) {
  //mock
  const game1Data = { _id:'1', name:'Juego 1', description: 'Descripcion del juego', numberOfPlayers: 4, creator: 'Alguien', modified: new Date(), created: new Date()}
  const game2Data = { _id:'1', name:'Juego 2', description: 'Descripcion del juego', numberOfPlayers: 4, creator: 'Alguien', modified: new Date(), created: new Date()}
  const game3Data = { _id:'3', name:'Juego 3', description: 'Descripcion del juego', numberOfPlayers: 4, creator: 'Alguien', modified: new Date(), created: new Date()}

  const game1 = Object.assign(new Game(), game1Data);
  const game2 = Object.assign(new Game(), game2Data);
  const game3 = Object.assign(new Game(), game3Data);

  const games :Array<Game> = [game1,  game2, game3];

  return games;
  // fin mock

  /* 
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok');
      return res.json();
    })
    .then((res) => {
      const { jwt } = res;
      return jwt;
    }); */
}
