import type { FC } from 'react';
import React from 'react';
import { NavBar } from '../components/NavBar';
import styles from '../scss/play.module.scss';

interface PlayCardProps {}
export const PlayCard: FC<PlayCardProps> = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
      </div>
    </div>
  );
};
