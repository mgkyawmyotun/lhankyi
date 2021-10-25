import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAlreadyLogin } from '../components/hook';
import { NavBar } from '../components/NavBar';
import { RegisterForm } from '../components/register/RegisterForm';
import {
  RegisterTextData,
  selectRegister,
} from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
import styles from '../scss/register.module.scss';
import RegisterFormIllustraion from '../svg/ReigsterFormIllustration';
export const Register: FC = () => {
  useAlreadyLogin();
  const { push } = useHistory();
  const text = useSelector<RootState, RegisterTextData>(selectRegister);
  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <NavBar />
        <div className={styles.register__form}>
          <div className={styles.register__form__left}>
            <h1>{text.intro_text}</h1>
            <h3>{text.intro_text_sm}</h3>
            <RegisterFormIllustraion />
          </div>
          <div className={styles.register__form__right}>
            <h1>{text.header}</h1>
            <RegisterForm />
            <h1
              onClick={() => {
                push('/login');
              }}
            >
              {text.to_login}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
