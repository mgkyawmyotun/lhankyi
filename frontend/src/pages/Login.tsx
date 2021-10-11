import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../components/login/LoginForm';
import { NavBar } from '../components/NavBar';
import styles from '../scss/login.module.scss';
export const Login: FC = () => {
  const { push } = useHistory();
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <NavBar />
        <div className={styles.login__form}>
          <h1>အကောင့်သို့ဝင်မည်</h1>
          <LoginForm />
          <h3
            onClick={() => {
              push('/register');
            }}
          >
            အကောင့်မရှိဘူးလား?
          </h3>
        </div>
      </div>
    </div>
  );
};
