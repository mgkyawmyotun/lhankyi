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
          }
          onFlipCard();
        }}
      />
    </div>
  );
};
