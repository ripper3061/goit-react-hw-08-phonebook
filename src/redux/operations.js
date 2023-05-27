import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

const errorMessage = `Sorry, something went wrong. Please reload the page!`;

export const fetchContacts = createAsyncThunk(
  'contacts/contactsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure(`${errorMessage}`)
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/newContactAdd',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      Notiflix.Notify.success('Contact added');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure(`${errorMessage}`)
      );
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.success('Contact deleted');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        Notiflix.Notify.failure(`${errorMessage}`)
      );
    }
  }
);
