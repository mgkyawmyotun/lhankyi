import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Language,
  selectLanguage,
  switchToAnother,
} from '../redux/slices/swithTextData';
import { AppDispatch, RootState } from '../redux/store';
import styles from '../scss/navbar.module.scss';
import Logo from '../svg/Logo';
export const NavBar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const language = useSelector<RootState, Language>(selectLanguage);
  return (
    <>
      <div className={styles.nav}>
        <Logo />
        <h3
          onClick={() => {
            dispatch(switchToAnother());
          }}
        >
          {language}
        </h3>
      </div>
    </>
  );
};
