import type { FC } from 'react';
import React from 'react';
import { GetDesksQuery } from '../../generated/graphql';
import styles from '../../scss/desk.module.scss';
import { DeskCard } from './DeskCard';

interface DeskPannelProps {
  data: GetDesksQuery | undefined;
}
export const DeskPannel: FC<DeskPannelProps> = ({ data }) => {
  return (
    <div className={styles.card__pannel}>
      {data &&
        data.getDesks?.map(({ name }, index) => (
          <DeskCard key={index}>{name || ''}</DeskCard>
        ))}
    </div>
  );
};
