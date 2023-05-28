import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsPending = state => {
  state.isLoading.contacts = true;
};

const addContactsPending = state => {
  state.isLoading.add = true;
};

const deleteContactsPending = state => {
  state.isLoading.delete = true;
};

const contactsRejected = (state, action) => {
  state.isLoading.contacts = false;
  state.isLoading.add = false;
  state.isLoading.delete = false;
  state.error = action.payload;
};

const fetchContactsFulfilled = (state, action) => {
  state.isLoading.contacts = false;
  state.error = null;
  state.items = action.payload;
};

const addContactsFulfilled = (state, action) => {
  state.isLoading.contacts = false;
  state.isLoading.add = false;

  state.error = null;
  state.items.push(action.payload);
};

const deleteContactsFulfilled = (state, action) => {
  state.isLoading.contacts = false;
  state.isLoading.delete = false;
  state.error = null;
  const index = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: { contacts: false, add: false, delete: false },
    error: null,
  },
  filter: '',

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, contactsPending)
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.rejected, contactsRejected)
      .addCase(addContact.pending, addContactsPending)
      .addCase(addContact.fulfilled, addContactsFulfilled)
      .addCase(addContact.rejected, contactsRejected)
      .addCase(deleteContact.pending, deleteContactsPending)
      .addCase(deleteContact.fulfilled, deleteContactsFulfilled)
      .addCase(deleteContact.rejected, contactsRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
