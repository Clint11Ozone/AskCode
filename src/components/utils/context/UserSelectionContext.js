import React, { createContext, useState } from 'react';

export const UserSelectionContext = createContext();

export const UserSelectionProvider = ({ children }) => {
  const [selectedOptionC, setSelectedOptionC] = useState(null);

  return (
    <UserSelectionContext.Provider value={{ selectedOptionC, setSelectedOptionC }}>
      {children}
    </UserSelectionContext.Provider>
  );
};