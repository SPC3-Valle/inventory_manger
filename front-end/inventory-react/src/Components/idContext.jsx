import React, { createContext, useState } from 'react';

export const IdContext = createContext();

export const IdProvider = ({children}) => {
  const [idNumber, setIdNumber] = useState({});

  return(
    <IdContext.Provider value={{idNumber, setIdNumber}}>
      {children}
    </IdContext.Provider>
  )
};