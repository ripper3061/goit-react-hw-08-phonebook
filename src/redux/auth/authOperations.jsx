import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk('auth/signup', async formData => {
  try {
    const { data } = await axios.post('/users/signup', formData);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const signIn = createAsyncThunk('auth/signin', async formData => {
  try {
    const { data } = await axios.post('/users/login', formData);
    token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const logOut = createAsyncThunk('auth/logout', async token => {
  try {
    await axios.post('/users/logout', token);
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);
