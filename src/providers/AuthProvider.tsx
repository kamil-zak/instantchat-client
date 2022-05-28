import { useQuery } from '@apollo/client';
import { IUserPayload } from '../interfaces/user';
import { createContext, FC, useContext } from 'react';
import { IUserPayloadData, USER_PAYLOAD } from '../apollo/gql/queries/user';
import { LoadingBar } from '../components/LoadingBar/LoadingBar';

const AuthContext = createContext<IUserPayload | null>(null);

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
  const user = data ? data.userPayload : null;

  return <AuthContext.Provider value={user}>{loading ? <LoadingBar /> : children}</AuthContext.Provider>;
};
