import React from "react";
import styles from './Authorization.module.css';


const Authorization = () => {
  return (
    <div className={styles['form-container']}>
      <form className={styles.form}>
        <span className={styles.heading}>Войти в аккаунт</span>
        <label className={styles.label} htmlFor="login">
          Логин
          <input role="login" type="text" autoComplete="off" />
        </label>
        <label className={styles.label} htmlFor="password">
          Пароль
          <input type="password" />
        </label>
        <button className={styles['button-submit']} type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Authorization;