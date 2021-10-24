import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, PlayFooterButton } from '../components/play';
import { useGetPlayAbleCardsQuery } from '../generated/graphql';
import styles from '../scss/play.module.scss';

export type CardType = {
  __typename?: 'Card' | undefined;
  card_id: string;
  card_name: string;
  card_data_front: string;
  card_data_back: string;
  playable_in: any;
};
export const PlayCard: FC = () => {
  const { data, refetch } = useGetPlayAbleCardsQuery({
    fetchPolicy: 'network-only',
  });
  const { goBack } = useHistory();
  const [currentCard, setCurrentCard] = useState<CardType>();
  useEffect(() => {
    if (data) {
      setCurrentCard(data.getPlayAbleCards[0]);
    }
  }, [data]);
  const [showBack, setShowBack] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        {currentCard ? (
          <div className={styles.play}>
            <Card
              card_back_data={currentCard.card_data_back}
              card_front_data={currentCard.card_data_front}
              card_name={currentCard.card_name}
              showBack={showBack}
            />
            <PlayFooterButton
              showBack={showBack}
              setShowBack={setShowBack}
              card_id={currentCard.card_id}
              onMoveNextCard={async () => {
                const { data } = await refetch();
                setCurrentCard(data.getPlayAbleCards[0]);
                setShowBack(false);
              }}
            />
          </div>
        ) : (
          <div className={styles.outofcards}>
            <h1>Completed</h1>
            <h3
              onClick={() => {
                goBack();
              }}
            >
              Go Back
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
