export interface IGame {
  _id: string;
  name: string;
  description: string;
  numberOfPlayers: number;
  creator: string;
  modified: Date;
  created: Date;
  // any other props that come into the component
}

export class Game implements IGame {
  _id = '';
  name = '';
  description = '';
  numberOfPlayers = -1;
  creator = '';
  modified = new Date();
  created = new Date();

}
