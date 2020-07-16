export interface IUser {
  name: string;
  apellido: string;
  // any other props that come into the component
}

export class User implements IUser {
    
  name: string = '';

  apellido = '';

  constructor({ name, apellido }: IUser) {
    Object.assign(this, { name, apellido });
  }
}
