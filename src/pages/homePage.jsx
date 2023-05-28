import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const styles = {
  container: {
    paddingTop: 100,
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
  secondTitle: {
    fontWeight: 500,
    textAlign: 'center',
  },
};

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to your Phonebook
        <span role="img" aria-label="Icon">
          💁‍♀️
        </span>
      </h1>
      {!isLoggedIn && (
        <h3 style={styles.secondTitle}>Please Log In or Sign Up</h3>
      )}
    </div>
  );
}
