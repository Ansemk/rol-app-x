import { Login } from '../models/Login';

const ENDPOINT = 'http://localhost:3000/api';

export default async function login({ user, password }: Login) {
  //mock

  const jwt = `dfkjdkslfjkdlsjfklds.dsfjkdsfjkdsf,eu343jjdfdfs`;

  return jwt;
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
