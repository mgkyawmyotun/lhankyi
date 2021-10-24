import type { FC } from 'react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGetPlayAbleCardsCountQuery } from '../../generated/graphql';
import styles from '../../scss/card.module.scss';
import PlayIcon from '../../svg/PlayIcon';
export const PlayButton: FC = () => {
  const { push } = useHistory();
  const { data } = useGetPlayAbleCardsCountQuery({
    fetchPolicy: 'network-only',
  });
  return (
    <>
      <div
        className={styles.play_button}
        onClick={() => {
          push('/play');
        }}
      >
        <PlayIcon />
        <div className={styles.count}>{data && data.getPlayAbleCardsCount}</div>
      </div>
    </>
  );
};
