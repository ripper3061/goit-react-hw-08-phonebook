import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { phonebookApi } from './phonebookApi';

const reducers = combineReducers({
  [phonebookApi.reducerPath]: phonebookApi.reducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});
