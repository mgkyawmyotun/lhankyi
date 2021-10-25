import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Desk } from '../components/desk';
import { useIsUserLogin } from '../components/hook';
import { NavBar } from '../components/NavBar';
import { DeskTextData, selectDesk } from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
import styles from '../scss/app.module.scss';
export const MainApp: FC = () => {
  const text = useSelector<RootState, DeskTextData>(selectDesk);

  useIsUserLogin();
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <h1>{text.header}</h1>
        <Desk />
      </div>
    </div>
  );
};
