import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dragonSlice from './DragonsReducerSlice';
import sliceRocket from './RocketAPIReducer';
import reducerMissions from './mission';

const rootReducer = reducerMissions;

const Store = configureStore({
  reducer: {
    missions: rootReducer,
    rockets: sliceRocket,
    dragons: dragonSlice,
  },
  applyMiddleware: [thunk],
});

export default Store;
