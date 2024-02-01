import React, { createContext, useState } from 'react';

export const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedShowTicket, setSelectedShowTicket] = useState(null);

  return (
    <ShowContext.Provider value={{ selectedShow, setSelectedShow, selectedShowTicket, setSelectedShowTicket }}>
      {children}
    </ShowContext.Provider>
  );
};
