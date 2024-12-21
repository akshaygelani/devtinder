import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import feedReducer from './slices/feed';
import connectionsReducer from './slices/connections';
import requestsReducer from './slices/requests';

export const devTinderStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connections: connectionsReducer,
    requests: requestsReducer,
  },
});
