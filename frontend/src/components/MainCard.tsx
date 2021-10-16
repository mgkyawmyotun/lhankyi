import type { FC } from 'react';
import React from 'react';
import styles from '../scss/maincard.module.scss';
interface MainCardProps {}
export const MainCard: FC<MainCardProps> = () => {
  return <div className={styles.card}></div>;
};
