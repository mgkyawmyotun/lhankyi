import React, { FC } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import styles from '../../scss/card.module.scss';
import PlayIcon from '../../svg/PlayIcon';

Modal.setAppElement('#root');
export const PlayButton: FC<{ desk_name: string }> = ({ desk_name }) => {
  const { push } = useHistory();
  return (
    <>
      <div
        className={styles.play_button}
        onClick={() => {
          push('/play/' + desk_name);
        }}
      >
        <PlayIcon />
      </div>
    </>
  );
};
