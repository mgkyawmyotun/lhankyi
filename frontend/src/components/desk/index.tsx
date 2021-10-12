import React, { FC, useEffect, useState } from 'react';
import { GetDesksQuery, useGetDesksQuery } from '../../generated/graphql';
import styles from '../../scss/desk.module.scss';
import { Loading } from '../Loading';
import { AddDesk } from './AddDesk';
import { DeskPannel } from './DeskPannel';
export const Desk: FC = () => {
  const [result, setResult] = useState<GetDesksQuery | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const { data, refetch } = useGetDesksQuery();
  useEffect(() => {
    if (data) {
      console.log('Hello');
      setResult(data);
      setLoading(false);
    }
  }, [data]);
  return (
    <>
      <div className={styles.app__desk__pannel}>
        {loading ? <Loading /> : <DeskPannel data={result} />}
        <AddDesk
          onClose={async () => {
            console.log('On Close');
            setLoading(true);
            const { data } = await refetch();
            setResult(data);
            setLoading(false);
          }}
        />
      </div>
    </>
  );
};
