import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetUserQuery } from '../generated/graphql';
export const MainApp: FC = () => {
  const { loading, data } = useGetUserQuery({});

  const route = useHistory();
  useEffect(() => {
    if (!loading) {
      if (!data?.getUser) {
        route.push('/login');
      }
    }
  }, [loading]);
  return (
    <>
      <h1>From App</h1>
      {!loading && data?.getUser.email}
    </>
  );
};
