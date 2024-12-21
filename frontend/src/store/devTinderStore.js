import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import feedReducer from './slices/feed';
import connectionsReducer from './slices/connections';

export const devTinderStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
  },
});
