import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from './slices';
import { filterSlice } from './signupSlice';
import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

export const { filter } = filterSlice.actions;
