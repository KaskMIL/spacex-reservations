import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerMissions, { fetchMissions } from './mission';

const rootReducer = reducerMissions;

const store = configureStore({
  reducer: {
    missions: rootReducer,
  },
  applyMiddleware: [thunk],
});

store.subscribe(() => {
  store.getState();
});
store.dispatch(fetchMissions());

export default store;
