import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerMissions from './mission';

const rootReducer = reducerMissions;

const store = configureStore({
  reducer: {
    missions: rootReducer,
  },
  applyMiddleware: [thunk],
});

export default store;
