import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useGetUserQuery } from '../generated/graphql';
import { getToken } from '../utils/auth';

export function useAlreadyLogin() {
  const { data } = useGetUserQuery({
    fetchPolicy: 'network-only',
  });
  const { push } = useHistory();
  useEffect(() => {
    if (getToken().length > 0 && data && data.getUser) {
      push('/');
    }
    // eslint-disable-next-line
  }, [data]);
}
export function useIsUserLogin() {
  const route = useHistory();
  const { data, loading } = useGetUserQuery({
    fetchPolicy: 'network-only',
  });
  useEffect(() => {
    if (getToken().length === 0) {
      route.push('/login');
    }
    if (!loading) {
      if (!data || !data.getUser) {
        route.push('/login');
      }
    }
    // eslint-disable-next-line
  }, [data, loading]);
}
