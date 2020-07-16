import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

import 'ui-lib';

function HomePage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      Esto es la home. Hola, {user.name} {user.apellido}
    </div>
  );
}

export default HomePage;
