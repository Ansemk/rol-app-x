
export interface ILogin {
  user: string;
  password: string;
  // any other props that come into the component
}

export class Login implements ILogin {
    
  user: string = '';
  password = '';

}
