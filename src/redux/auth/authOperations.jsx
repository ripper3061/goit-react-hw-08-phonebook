import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signUp = createAsyncThunk('auth/signup', async formData => {
  try {
    const { data } = await axios.post('/users/signup', formData);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

export const signIn = createAsyncThunk('auth/signin', async formData => {
  try {
    const { data } = await axios.post('/users/login', formData);
    // token.set(data.token);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});
