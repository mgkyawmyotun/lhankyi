import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  GetCardsByDeskQuery,
  useGetCardsByDeskQuery,
} from '../../generated/graphql';
import { CardTextData, selectCard } from '../../redux/slices/swithTextData';
import { RootState } from '../../redux/store';
import styles from '../../scss/card.module.scss';
import { Loading } from '../Loading';
import { AddCard } from './AddCard';
import { CardPannel } from './CardPannel';
import { PlayButton } from './PlayButton';

export const Card: FC = () => {
  const text = useSelector<RootState, CardTextData>(selectCard);

  const {
    params: { desk_name },
  } = useRouteMatch<{ desk_name: string }>();
  const { push } = useHistory();
  const [result, setResult] = useState<GetCardsByDeskQuery | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const { data, refetch } = useGetCardsByDeskQuery({
    variables: { desk_name },
  });
  useEffect(() => {
    if (data) {
      setResult(data);
      setLoading(false);
    }
  }, [data]);
  async function refetchData() {
    setLoading(true);
    const { data } = await refetch();
    setResult(data);
    setLoading(false);
  }
  return (
    <>
      <div className={styles.app__desk__pannel}>
        <h1
          onClick={() => {
            push('/');
          }}
        >
          {text.back}
        </h1>
        {loading ? <Loading /> : <CardPannel data={result} />}
        <PlayButton desk_name={desk_name} />
        <AddCard
          onClose={() => {
            refetchData();
          }}
          desk_name={desk_name}
        />
      </div>
    </>
  );
};
