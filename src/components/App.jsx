import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import ContactsPage from '../pages/contactsPage';
import HomePage from '../pages/homePage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';

// import { authOperations } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

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
