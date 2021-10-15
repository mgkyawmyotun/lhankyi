import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/card.module.scss';
interface CardStyleProps {
  name: string;
}
export const CardStyle: FC<CardStyleProps> = ({ name }) => {
  return <div className={styles.card}>{name}</div>;
};
