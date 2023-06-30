import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState({ initialState: 'initialState' });

  const updateData = (newData) => {
    setData(newData);
  };

  const contextValue = useMemo(() => ({ data, updateData }), [data]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
