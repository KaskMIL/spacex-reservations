import { configureStore } from '@reduxjs/toolkit';
import dragonSlice from './DragonsReducerSlice';

const store = configureStore({
  reducer: {
    dragons: dragonSlice,
  },
});

export default store;
