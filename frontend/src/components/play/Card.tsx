import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/play.module.scss';

interface CardProps {}
export const Card: FC<CardProps> = () => {
  return (
    <div className={styles.play__card}>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  );
};
