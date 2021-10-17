import type { FC } from 'react';
import React from 'react';
import styles from '../scss/maincard.module.scss';
interface MainCardProps {
  data: string;
}

export const MainCard: FC<MainCardProps> = ({ data }) => {
  return (
    <div
      className={styles.card}
      dangerouslySetInnerHTML={{ __html: data }}
    ></div>
  );
};
