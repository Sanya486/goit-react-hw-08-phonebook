import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthorization = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthorization = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const fetchSignup = createAsyncThunk(
  'users/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      setAuthorization(response.data.token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', user);
      setAuthorization(response.data.token);
      const userName = response.data.user.name;
      toast.success(`Welcome back, ${userName}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'users/logout',
  async (_, thunkAPI) => {
    try {
      const response = await axios.post('/users/logout');
      clearAuthorization();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRefresh = createAsyncThunk(
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.auth.token) {
      return thunkAPI.rejectWithValue();
    }
    setAuthorization(state.auth.token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const toastPromise = axios.post('/contacts', contact);
      const response = await toastPromise;
      toast.promise(toastPromise, {
        loading: 'Loading',
        success: `${response.data.name} added successfully`,
        error: `Something went wrong. Please try more later!`,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contact, thunkAPI) => {
    try {
      const name = contact.name;
      const number = contact.number;
      const toastPromise = axios.patch(`/contacts/${contact.id}`, {
        name,
        number,
      });
      const response = await toastPromise;
      toast.promise(toastPromise, {
        loading: 'Loading',
        success: `${response.data.name} was eddited.`,
        error: `Something went wrong. Please try more later!`,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const toastPromise = axios.delete(`/contacts/${id}`);
      const response = await toastPromise;
      toast.promise(toastPromise, {
        loading: 'Loading',
        success: `${response.data.name} was removed.❌`,
        error: `Something went wrong. Please try more later!`,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
