import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from './slices';
import { filterSlice } from './signupSlice';
import { authSlice } from './authSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(
  persistContactsConfig,
  authSlice.reducer
);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export const { filter } = filterSlice.actions;
