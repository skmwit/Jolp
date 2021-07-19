import React, { createContext, useContext, useReducer } from "react";


const StateContext = createContext(); //DataLayer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //Pull information from DataLayer
