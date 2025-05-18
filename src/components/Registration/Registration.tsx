import React from "react";
import styles from './registration.module.css';


const Registration = () => {
  return (
    <div className={styles['form-container']}>
      <form className={styles.form}>
        <span className={styles.heading}>Регистрация</span>
        <label className={styles.label} htmlFor="login">
          Логин
          <input role="login" type="text" autoComplete="off" />
        </label>
        <label className={styles.label} htmlFor="password">
          Пароль
          <input type="password" />
        </label>
        <label className={styles.label} htmlFor="repeat-pass">
          Повторите пароль 
          <input type="password" />
        </label>
        <label className={styles.label} htmlFor="email">
          Электронная почта
          <input type="email" />
        </label>
        <button className={styles['button-submit']} type="submit">Регистрация</button>
        <span className={styles['have-accaunt']}>Уже есть аккаунт? <span>Войти</span></span>
      </form>
    </div>
  )
}

export default Registration;