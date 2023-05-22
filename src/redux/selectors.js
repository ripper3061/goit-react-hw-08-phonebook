import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading.contacts;
export const selectAddLoading = state => state.contacts.isLoading.add;
export const selectDeleteLoading = state => state.contacts.isLoading.delete;
export const selectError = state => state.contacts.error;
export const selectFilteredName = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilteredName],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
