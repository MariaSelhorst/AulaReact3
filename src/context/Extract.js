import React, { createContext, useState } from 'react';

export const ExtractContext = createContext();

export const ExtractProvider = ({ children }) => {
  const [extractData, setExtractData] = useState([]);

  const addExtractItem = (item) => {
    setExtractData((prevData) => [...prevData, item]);
  };

  return (
    <ExtractContext.Provider value={{ extractData, addExtractItem }}>
      {children}
    </ExtractContext.Provider>
  );
};
