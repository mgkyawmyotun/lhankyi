import React, { FC, useEffect, useState } from 'react';
import { DeskCtx } from '../../context/DeskContext';
import { GetDesksQuery, useGetDesksQuery } from '../../generated/graphql';
import styles from '../../scss/desk.module.scss';
import { Loading } from '../Loading';
import { AddDesk } from './AddDesk';
import { DeskPannel } from './DeskPannel';
import { PlayButton } from './PlayButton';
export const Desk: FC = () => {
  const [result, setResult] = useState<GetDesksQuery | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const { data, refetch } = useGetDesksQuery();
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
      <DeskCtx.Provider value={{ refetchData }}>
        <div className={styles.app__desk__pannel}>
          {loading ? <Loading /> : <DeskPannel data={result} />}
          <PlayButton />
          <AddDesk
            onClose={() => {
              refetchData();
            }}
          />
        </div>
      </DeskCtx.Provider>
    </>
  );
};
