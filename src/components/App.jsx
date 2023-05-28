import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import ContactsPage from '../pages/contactsPage';
import HomePage from '../pages/homePage';
import { AppSection } from '../components/App.styled';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectFetchingCurrentUser } from 'redux/auth/authSelectors';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import LogInPage from '../pages/LogInPage';
import SignUpPage from 'pages/SignUpPage';

export default function App() {
  const dispatch = useDispatch();
  const fetchingCurrentUser = useSelector(selectFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !fetchingCurrentUser && (
      <AppSection>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LogInPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<SignUpPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </AppSection>
    )
  );
}
