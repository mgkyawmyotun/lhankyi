import type { FC } from 'react';
import React from 'react';
import { GetCardsByDeskQuery } from '../../generated/graphql';
import styles from '../../scss/card.module.scss';
import { CardStyle } from './CardStyle';

interface CardPannelProps {
  data: GetCardsByDeskQuery | undefined;
}
export const CardPannel: FC<CardPannelProps> = ({ data }) => {
  return (
    <div className={styles.card__pannel}>
      {data &&
        data.getCardsByDesk?.map(({ card_name }, index) => (
          <CardStyle key={index} name={card_name}></CardStyle>
        ))}
    </div>
  );
};
