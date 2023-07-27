import { configureStore } from '@reduxjs/toolkit';

import { addContactSlice, filterSlice } from './slices';

export const store = configureStore({
  reducer: {
    contacts: addContactSlice.reducer,
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
