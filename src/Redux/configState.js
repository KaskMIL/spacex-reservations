import { configureStore } from '@reduxjs/toolkit';
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
});

export default Store;
