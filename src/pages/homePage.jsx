import React from 'react';

const styles = {
  container: {
    minHeight: 400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to your Phonebook
      <span role="img" aria-label="Icon">
        💁‍♀️
      </span>
    </h1>
  </div>
);

export default HomePage;
