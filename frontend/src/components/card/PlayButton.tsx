import React, { FC } from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { useGetPlayAbleCardsByDeskCountQuery } from '../../generated/graphql';
import styles from '../../scss/card.module.scss';
import PlayIcon from '../../svg/PlayIcon';

Modal.setAppElement('#root');
export const PlayButton: FC<{ desk_name: string }> = ({ desk_name }) => {
  const { push } = useHistory();
  const { data } = useGetPlayAbleCardsByDeskCountQuery({
    variables: { desk_name },
    fetchPolicy: 'network-only',
  });
  return (
    <>
      <div
        className={styles.play_button}
        onClick={() => {
          push('/play/' + desk_name);
        }}
      >
        <PlayIcon />
        <div className={styles.count}>
          {data && data.getPlayAbleCardsByDeskCount}
        </div>
      </div>
    </>
  );
};
