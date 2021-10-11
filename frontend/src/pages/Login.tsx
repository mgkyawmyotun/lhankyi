import type { FC } from 'react';
import React from 'react';
import { LoginForm } from '../components/login/LoginForm';
import { NavBar } from '../components/NavBar';
import styles from '../scss/login.module.scss';
export const Login: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <NavBar />
        <div className={styles.login__form}>
          <h1>အကောင့်သို့ဝင်မည်</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
