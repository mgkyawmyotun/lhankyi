import React, { FC, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { Card, PlayFooterButton } from '../components/play';
import { useGetPlayAbleCardsByDeskQuery } from '../generated/graphql';
import styles from '../scss/play.module.scss';

export type CardType = {
  __typename?: 'Card' | undefined;
  card_id: string;
  card_name: string;
  card_data_front: string;
  card_data_back: string;
  playable_in: any;
};
interface PlayCardByDeskProps {}
export const PlayCardByDesk: FC<PlayCardByDeskProps> = () => {
  const { params } = useRouteMatch<{ desk_name: string }>();
  const { data } = useGetPlayAbleCardsByDeskQuery({
    variables: { desk_name: params.desk_name },
  });
  const [currentCard, setCurrentCard] = useState<CardType>();
  useEffect(() => {
    if (data) {
      setCurrentCard(data.getPlayAbleCardsByDesk[0]);
    }
  }, [data]);
  const [showBack, setShowBack] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <div className={styles.app_container}>
        <NavBar />
        {currentCard && (
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
            />
          </div>
        )}
      </div>
    </div>
  );
};
