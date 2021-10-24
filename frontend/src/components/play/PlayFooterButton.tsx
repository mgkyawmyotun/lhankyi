import moment from 'moment';
import type { FC } from 'react';
import React from 'react';
import { useSetPlayableTimeMutation } from '../../generated/graphql';
import styles from '../../scss/play.module.scss';
interface PlayFooterButtonProps {
  showBack: boolean;
  setShowBack: React.Dispatch<React.SetStateAction<boolean>>;
  card_id: string;
  onMoveNextCard: () => void;
}
export const PlayFooterButton: FC<PlayFooterButtonProps> = ({
  showBack,
  setShowBack,
  card_id,
  onMoveNextCard,
}) => {
  const [setPlayAbleTime] = useSetPlayableTimeMutation();
  async function setTime(time: 'vg' | 'g' | 'b' | 'vb') {
    const now_date = new Date();
    let new_date;
    if (time === 'vg') {
      new_date = moment(now_date).add(2, 'days');
    }
    if (time === 'g') {
      new_date = moment(now_date).add(1, 'day');
    }
    if (time === 'b') {
      new_date = moment(now_date).add(10, 'minute');
    }
    if (time === 'vb') {
      new_date = moment(now_date).add(2, 'minute');
    }
    if (new_date) {
      try {
        await setPlayAbleTime({
          variables: { card_id, date: new_date.toDate() },
        });
        onMoveNextCard();
      } catch (error) {}
    }
  }
  return (
    <div className={styles.play__buttons}>
      {showBack ? (
        <div className={styles.mark}>
          <div onClick={() => setTime('vg')}>Very Good</div>
          <div onClick={() => setTime('g')}>Good</div>
          <div onClick={() => setTime('b')}>Bad</div>
          <div onClick={() => setTime('vb')}>Very Bad</div>
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
