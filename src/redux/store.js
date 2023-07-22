import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/authSlice';
import { postsReducer } from './posts/postsSlice';
import mediaReducer from './media/mediaSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  media: mediaReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
