import React, { FC } from 'react';
import styles from '../../scss/desk.module.scss';
import { DeskDropDown } from './DeskDropDown';
interface DeskCardProps {
  children: string;
}
export const DeskCard: FC<DeskCardProps> = ({ children }) => {
  return (
    <div className={styles.card}>
      {children}
      <DeskDropDown desk_name={children} />
    </div>
  );
};
