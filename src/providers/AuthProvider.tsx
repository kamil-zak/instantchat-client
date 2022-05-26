import { useMutation, useQuery } from '@apollo/client';
import { IUserPayload } from '../interfaces/user';
import { createContext, FC, useContext } from 'react';
import { setUserToken } from '../services/auth';
import { IUserPayloadData, USER_PAYLOAD } from '../apollo/queries/queries';
import { LOGOUT } from '../apollo/queries/mutations';

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

interface IAuthProviderProps {
  children?: React.ReactNode;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const { data, loading } = useQuery<IUserPayloadData>(USER_PAYLOAD);
  const user = data?.userPayload;

  const [logout] = useMutation(LOGOUT, {
    update: (cache) => {
      setUserToken('');
      cache.writeQuery({ query: USER_PAYLOAD, data: { userPayload: null } });
      cache.reset();
    },
  });

  const value = user ? { logout, user } : null;
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
