import type { FC } from 'react';
import React from 'react';
import { Card } from '../components/card';
import { NavBar } from '../components/NavBar';
import styles from '../scss/card.module.scss';
export const AppCard: FC = () => {
  // eslint-disable-next-line

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
