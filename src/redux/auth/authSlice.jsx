import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, logOut } from '../auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const signUpFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const signInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutFulfilled = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(signUp.fulfilled, signUpFulfilled);
    builder.addCase(signIn.fulfilled, signInFulfilled);
    builder.addCase(logOut.fulfilled, logOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
