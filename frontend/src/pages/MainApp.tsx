import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { useGetUserQuery } from '../generated/graphql';
import styles from '../scss/app.module.scss';
import DotIcon from '../svg/DotIcon';
import PlusIcon from '../svg/PlusIcon';
export const MainApp: FC = () => {
  const { loading, data } = useGetUserQuery({
    fetchPolicy: 'no-cache',
  });

  const route = useHistory();
  useEffect(() => {
    if (!loading) {
      if (!data?.getUser) {
        route.push('/login');
      }
    }
  }, [loading, data?.getUser]);
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        <h1>Your Desk</h1>
        <div className={styles.app__desk__pannel}>
          <div className={styles.card__pannel}>
            <div className={styles.card}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            </div>
            <div className={styles.card}>
              helow od <DotIcon />
            </div>
            <div className={styles.card}>bar kyi tar lae</div>
            <div className={styles.card}>helow od</div>
            <div className={styles.card}>helow od</div>
            <div className={styles.card}>bar kyi tar lae</div>
            <div className={styles.card}>bar kyi tar lae</div>
          </div>
          <div className={styles.add_button}>
            <PlusIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
