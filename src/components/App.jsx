import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import ContactsPage from '../pages/contactsPage';
import HomePage from '../pages/homePage';
import SignUpPage from 'pages/SignInPage';
import SignInPage from 'pages/SignUpPage';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}