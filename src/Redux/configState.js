import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import dragonsReducer from './DragonReducer';
import { rocketReducer } from './RocketAPIReducer';
import reducerMissions from './mission';

const rootReducer = reducerMissions;

const Store = configureStore({
  reducer: {
    missions: rootReducer,
    rockets: rocketReducer,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
