import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../../scss/card.module.scss';
interface CardStyleProps {
  name: string;
  id: string;
}
export const CardStyle: FC<CardStyleProps> = ({ name, id }) => {
  const { push } = useHistory();
  return (
    <div
      className={styles.card}
      onClick={() => {
        push('/create/cards/' + id);
      }}
    >
      {name}
    </div>
  );
};
