import { useState, createContext, useEffect } from 'react';

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    users:[],
    searchedChar:''
  });

  const setUsers = (users) => {
    setState(prevState => ({ ...prevState, users: users }));
  };

  return (
    <Context.Provider
      value={{
      state,setUsers
    }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;