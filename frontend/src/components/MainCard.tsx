import React, { FC, useRef } from 'react';
import styles from '../scss/maincard.module.scss';
import FlipIcon from '../svg/FlipIcon';
interface MainCardProps {
  data?: string;
  onFlipCard: () => void;
}

export const MainCard: FC<MainCardProps> = ({ data, onFlipCard }) => {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div className={styles.card}>
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
