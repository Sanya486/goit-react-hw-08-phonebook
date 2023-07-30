import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, editContact, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.items.unshift(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected]: handleRejected,
    [editContact.pending]: handlePending,
    [editContact.fulfilled]: (state, action) => {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items[index] = action.payload;
    },
    [editContact.rejected]: handleRejected,
  },
});
