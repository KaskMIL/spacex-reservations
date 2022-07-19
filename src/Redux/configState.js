import { configureStore } from '@reduxjs/toolkit';
import dragonSlice from './DragonsReducerSlice';
import sliceRocket from './RocketAPIReducer';

const store = configureStore({
  reducer: {
    rockets: sliceRocket,
    dragons: dragonSlice,
  },
});

export default store;
