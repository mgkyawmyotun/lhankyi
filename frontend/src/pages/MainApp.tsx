import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Desk } from '../components/desk';
import { NavBar } from '../components/NavBar';
import { useGetUserQuery } from '../generated/graphql';
import { DeskTextData, selectDesk } from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
import styles from '../scss/app.module.scss';
export const MainApp: FC = () => {
  const text = useSelector<RootState, DeskTextData>(selectDesk);
  const { loading, data } = useGetUserQuery({
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (!loading) {
      if (!data?.getUser) {
        route.push('/login');
      }
    }
    // eslint-disable-next-line
  }, [loading, data?.getUser]);
  const route = useHistory();
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
