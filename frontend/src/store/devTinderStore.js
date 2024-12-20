import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';

export const devTinderStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
