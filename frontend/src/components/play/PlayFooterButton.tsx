import type { FC } from 'react';
import React from 'react';
import styles from '../../scss/play.module.scss';

interface PlayFooterButtonProps {
  showBack: boolean;
  setShowBack: React.Dispatch<React.SetStateAction<boolean>>;
}
export const PlayFooterButton: FC<PlayFooterButtonProps> = ({
  showBack,
  setShowBack,
}) => {
  return (
    <div className={styles.play__buttons}>
      {showBack ? (
        <div className={styles.mark}>
          <div>Very Good</div>
          <div>Good</div>
          <div>Bad</div>
          <div>Very Bad</div>
        </div>
      ) : (
        <div
          className={styles.reveal}
          onClick={() => {
            setShowBack(true);
          }}
        >
          Reveal Card Back
        </div>
      )}
    </div>
  );
};
