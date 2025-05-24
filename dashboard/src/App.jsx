import React from 'react';
import styles from './assets/scss/App.module.scss';

const App = () => {
  return (
    <div>
      <h1 className={styles.title}>Hello This is Micro-frontend App for Dashboard Application</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
};

export default App;
