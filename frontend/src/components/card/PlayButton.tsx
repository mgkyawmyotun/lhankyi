import React, { FC } from 'react';
import Modal from 'react-modal';
import styles from '../../scss/card.module.scss';
import PlayIcon from '../../svg/PlayIcon';

Modal.setAppElement('#root');
export const PlayButton: FC = () => {
  return (
    <>
      <div
        className={styles.play_button}
        onClick={() => {
          console.log('Play');
        }}
      >
        <PlayIcon />
      </div>
    </>
  );
};
