import { configureStore } from '@reduxjs/toolkit';
import sliceRocket from './RocketAPIReducer';

const store = configureStore({
  reducer: {
    rockets: sliceRocket,
  },
});

export default store;
