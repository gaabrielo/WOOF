import { createContext, useState } from 'react';

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const json = localStorage.getItem('user');
  const localUser = JSON.parse(json);

  const [user, setUser] = useState(localUser ?? null);

  function handleUserSession(userId) {
    const json = JSON.stringify(userId);
    localStorage.setItem('user', json);
    setUser(userId);
  }

  return (
    <AuthContext.Provider value={{ user, handleUserSession }}>
      {props.children}
    </AuthContext.Provider>
  );
}
