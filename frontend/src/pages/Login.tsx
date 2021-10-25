import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../components/login/LoginForm';
import { NavBar } from '../components/NavBar';
import { LoginTextData, selectLogin } from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
import styles from '../scss/login.module.scss';
export const Login: FC = () => {
  const { push } = useHistory();
  const text = useSelector<RootState, LoginTextData>(selectLogin);
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <NavBar />
        <div className={styles.login__form}>
          <h1>{text.label}</h1>
          <LoginForm />
          <h3
            onClick={() => {
              push('/register');
            }}
          >
            {text.to_register}
          </h3>
        </div>
      </div>
    </div>
  );
};
