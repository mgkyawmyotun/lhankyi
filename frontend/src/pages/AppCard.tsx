import type { FC } from 'react';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Card } from '../components/card';
import { NavBar } from '../components/NavBar';
import styles from '../scss/card.module.scss';
export const AppCard: FC = () => {
  const { params } = useRouteMatch<{ desk_name: string }>();
  return (
    <>
      <div className={styles.app}>
        <div className={styles.app_container}>
          <NavBar />
          <h1>Your Card</h1>
          <Card />
        </div>
      </div>
    </>
  );
};
