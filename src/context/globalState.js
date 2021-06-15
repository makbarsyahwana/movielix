import React, { createContext, useReducer } from 'react';
import  {movieReducer, movieInitialState}  from '../reducer/movieReducer'
import combineReducers from 'react-combine-reducers';

const [reducerCombined, initialStateCombined] = combineReducers({
    movie: [movieReducer, movieInitialState]
});

export const GlobalContext = createContext(initialStateCombined);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerCombined, initialStateCombined);
  
    return (
      <GlobalContext.Provider
        value={[state, dispatch]}
      >
        {children}
      </GlobalContext.Provider>
    );
};