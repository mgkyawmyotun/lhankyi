import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useIsUserLogin } from '../components/hook';
import { NavBar } from '../components/NavBar';
import { Card, PlayFooterButton } from '../components/play';
import { useGetPlayAbleCardsByDeskQuery } from '../generated/graphql';
import { PlayTextData, selectPlay } from '../redux/slices/swithTextData';
import { RootState } from '../redux/store';
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
  useIsUserLogin();
  const { params } = useRouteMatch<{ desk_name: string }>();
  const { data, refetch } = useGetPlayAbleCardsByDeskQuery({
    variables: { desk_name: params.desk_name },
    fetchPolicy: 'network-only',
  });
  const { goBack } = useHistory();
  const [currentCard, setCurrentCard] = useState<CardType>();
  useEffect(() => {
    if (data) {
      setCurrentCard(data.getPlayAbleCardsByDesk[0]);
    }
  }, [data]);
  const [showBack, setShowBack] = useState<boolean>(false);
  const text = useSelector<RootState, PlayTextData>(selectPlay);

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
                const { data } = await refetch({ desk_name: params.desk_name });
                setCurrentCard(data.getPlayAbleCardsByDesk[0]);
                setShowBack(false);
              }}
            />
          </div>
        ) : (
          <div className={styles.outofcards}>
            <h1>{text.complete}</h1>
            <h3
              onClick={() => {
                goBack();
              }}
            >
              {text.back}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
