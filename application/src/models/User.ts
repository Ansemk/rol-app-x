export interface IUser {
  username: string;
  name: string;
  surname: string;
  age: number;

  // any other props that come into the component
}

export class User implements IUser {
  username = '';
  name: string = 'Anónimo';
  surname = '';
  age = 999;
}
