import { useMutation, useQuery } from '@apollo/client';
import { EMPTY_USER_PAYLOAD, IUserPayloadData, LOGOUT, USER_PAYLOAD } from '../apollo/queries/user';
import { IUserPayload } from '../interfaces/user';
import { createContext, FC, useContext } from 'react';
import { setUserToken } from '../services/auth';

interface IAuthContext {
  user: IUserPayload;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useIsLogged = () => !!useContext(AuthContext);
export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('');
  return auth;
};

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, loading } = useQuery<IUserPayloadData>(USER_PAYLOAD);
  const user = data?.userPayload;

  const [logout] = useMutation(LOGOUT, {
    update: (cache) => {
      setUserToken('');
      cache.writeQuery({ query: EMPTY_USER_PAYLOAD, data: { userPayload: null } });
      cache.reset();
    },
  });

  const value = user ? { logout, user } : null;
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
