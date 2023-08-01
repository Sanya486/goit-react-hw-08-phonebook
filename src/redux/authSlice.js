import { createSlice } from '@reduxjs/toolkit';
import { fetchSignup, fetchLogin, fetchLogout, fetchRefresh } from './operations';
 

const handlePending = state => {
  state.isLoading = true;
  state.error = null
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: '',
    isLoading: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [fetchSignup.pending]: handlePending,
    [fetchSignup.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = true;
    },
    [fetchSignup.rejected]: handleRejected,
    [fetchLogin.pending]: handlePending,
    [fetchLogin.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshing = true;
    },
    [fetchLogin.rejected]: handleRejected,
    [fetchLogout.pending]: handlePending,
    [fetchLogout.fulfilled]: state => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isRefreshing = false;
      state.token = '';
    },
    [fetchLogout.rejected]: handleRejected,
    [fetchRefresh.pending]: state => {
      state.isLoading = true;
      state.isRefreshing = true;
    },
    [fetchRefresh.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchRefresh.rejected]: (state, action) => {
      state.isLoading = false;
      state.isRefreshing = false;
    },
  },
});
