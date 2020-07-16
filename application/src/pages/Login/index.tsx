import React, { useState } from 'react';

import 'ui-lib';

function LoginPage() {
  const [userInput, setUserInput] = useState({
    name:'Email',
    value: 'hola',
    type: 'email',
    error: 'Error en usuario',
  });
  const [passwordInput, setPasswordInput] = useState({
    name: 'Contraseña',
    value: '',
    type: 'password',
    error: 'Error en contraseña',
  });

  return (
    <div>
      <wd-input label={userInput.name} type={userInput.type}>
        <p slot="errorMsg" className="error-msg">
          {userInput.error}
        </p>
      </wd-input>
      <wd-input label={passwordInput.name} type={passwordInput.type}>
        <p slot="errorMsg" className="error-msg">
          {passwordInput.error}
        </p>
      </wd-input>
    </div>
  );
}

export default LoginPage;
