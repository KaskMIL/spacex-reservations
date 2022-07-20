import { configureStore } from '@reduxjs/toolkit';
import dragonSlice from './DragonsReducerSlice';
import { rocketReducer } from './RocketAPIReducer';
import reducerMissions from './mission';

const rootReducer = reducerMissions;

const Store = configureStore({
  reducer: {
    missions: rootReducer,
    rockets: rocketReducer,
    dragons: dragonSlice,
  },
});

export default Store;
