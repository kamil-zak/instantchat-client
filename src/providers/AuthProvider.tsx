import { useQuery } from '@apollo/client';
import { IUserPayloadData, USER_PAYLOAD } from '../apollo/queries/user';
import { IUserPayload } from '../interfaces/user';
import { createContext, FC, useContext } from 'react';

const AuthContext = createContext<IUserPayload | undefined>(undefined);

export const useIsLogged = () => !!useContext(AuthContext);
export const useAuth = () => useContext(AuthContext) || { id: '', email: '' };

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, loading } = useQuery<IUserPayloadData>(USER_PAYLOAD);
  const userPayload = data?.userPayload;

  return <AuthContext.Provider value={userPayload}>{!loading && children}</AuthContext.Provider>;
};
