import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64648993043c103502bbfa0a.mockapi.io/',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useGetContactsQuery } = phonebookApi;

const { data, isLoading, error } = useGetContactsQuery;
console.log(data);
