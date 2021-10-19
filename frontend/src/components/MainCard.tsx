import React, { FC, useRef } from 'react';
import { CardState } from '../pages/CreateCard';
import styles from '../scss/maincard.module.scss';
import FlipIcon from '../svg/FlipIcon';
interface MainCardProps {
  data?: string;
  onFlipCard: () => void;
  card_name: string;
  card_position: CardState;
}

export const MainCard: FC<MainCardProps> = ({
  data,
  onFlipCard,
  card_name,
  card_position,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.card}>
      <div className={styles.card__details}>
        <h1>Name - {card_name}</h1>
        <h1>Position - {card_position}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: data || '' }} ref={divRef}></div>
      <FlipIcon
        onClick={() => {
          if (divRef && divRef.current) {
            divRef.current.classList.toggle(styles.flip);
            //remove class when animation is completed so can toggle later for another animation
            setTimeout(() => {
              if (divRef && divRef.current)
                divRef.current.classList.remove(styles.flip);
            }, 500);
          }
          onFlipCard();
        }}
      />
    </div>
  );
};
