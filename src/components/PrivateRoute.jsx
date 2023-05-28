import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectFetchingCurrentUser,
} from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetching = useSelector(selectFetchingCurrentUser);
  const shouldRedirect = !isLoggedIn && !isFetching;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
