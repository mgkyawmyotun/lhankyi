import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Desk } from '../components/desk';
import { NavBar } from '../components/NavBar';
import { useGetUserQuery } from '../generated/graphql';
import styles from '../scss/app.module.scss';
export const MainApp: FC = () => {
  const { loading, data } = useGetUserQuery({
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (!loading) {
      if (!data?.getUser) {
        route.push('/login');
      }
    }
  }, [loading, data?.getUser]);
  const route = useHistory();
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <h1>Your Desk</h1>
        <Desk />
      </div>
    </div>
  );
};
