import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = createAsyncThunk(
  'auth/signup',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', formData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure(`Please enter another Email`)
      );
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/signin',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', formData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure(`Please enter correct Email and Password`)
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
