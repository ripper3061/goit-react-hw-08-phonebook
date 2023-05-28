export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;

export const selectFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
