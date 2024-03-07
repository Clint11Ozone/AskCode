import React, { createContext, useState } from 'react';

export const UserSelectionContext = createContext();

export const UserSelectionProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <UserSelectionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </UserSelectionContext.Provider>
  );
};