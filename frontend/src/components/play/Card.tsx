import React, { FC, useEffect, useRef } from 'react';
import styles from '../../scss/play.module.scss';

interface CardProps {
  card_front_data: string;
  card_name: string;
  card_back_data: string;
  showBack: boolean;
}
export const Card: FC<CardProps> = ({
  card_back_data,
  card_name,
  card_front_data,
  showBack,
}) => {
  useEffect(() => {
    console.log(card_front_data);
  }, [card_front_data]);
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.play__card}>
      <h1>{card_name}</h1>
      <hr />
      <div
        dangerouslySetInnerHTML={{
          __html: !showBack ? card_front_data : card_back_data,
        }}
        ref={cardRef}
      ></div>
    </div>
  );
};
