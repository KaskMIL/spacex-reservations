import { configureStore } from '@reduxjs/toolkit';

import postReducer from './missions_reducers';

export default configureStore({
  reducer: {
    post: postReducer,
  },
});
