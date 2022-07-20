import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sliceRocket from './RocketAPIReducer';
import dragonsReducer from './DragonReducer';
import reducerMissions from './mission';

const rootReducer = reducerMissions;

const Store = configureStore({
  reducer: {
    missions: rootReducer,
    rockets: sliceRocket,
    dragons: dragonsReducer,
  },
  applyMiddleware: [thunk],
});

export default Store;
