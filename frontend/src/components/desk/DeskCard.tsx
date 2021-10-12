import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/desk.module.scss';
interface DeskCardProps {
  children: string;
}
export const DeskCard: FC<DeskCardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
