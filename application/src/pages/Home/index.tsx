import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import ListOfGames from '../../components/ListOfGames/ListOfGames'

import {useGames} from '../../hooks/useGames'

import 'ui-lib';

function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const { games, setGames } = useGames({});


  
  return (
    <>
      Esto es la home. Hola, {user.name} {user.surname}

      <ListOfGames games={games}></ListOfGames>

    </>
  );
}

export default HomePage;
