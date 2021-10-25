import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Language,
  selectLanguage,
  switchToAnother,
} from '../redux/slices/swithTextData';
import { AppDispatch, RootState } from '../redux/store';
import styles from '../scss/navbar.module.scss';
import Logo from '../svg/Logo';
import { getToken, removeToken } from '../utils/auth';
export const NavBar: FC = () => {
  const { push } = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector<RootState, Language>(selectLanguage);
  return (
    <>
      <div className={styles.nav}>
        <Logo />
        <div>
          <h3
            onClick={() => {
              dispatch(switchToAnother());
            }}
          >
            {language}
          </h3>
          {getToken().length > 0 && (
            <h3
              onClick={() => {
                removeToken();
                push('/login');
              }}
            >
              Logout
            </h3>
          )}
        </div>
      </div>
    </>
  );
};
