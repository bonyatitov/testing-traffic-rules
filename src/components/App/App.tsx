import React from 'react';
import styles from './app.module.css';
import 'normalize.css'
import Registration from '../Registration';
import Authorization from '../Authorization';


const App = () => {
  return (
    <div className={styles['main-container']}>
      <Registration />
      <Authorization />
    </div>
  );
};

export default App;