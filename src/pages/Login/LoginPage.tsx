import { gql, useApolloClient, useMutation } from '@apollo/client';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import StyledText from '../../components/StyledText/StyledText';
import { useIsLogged } from '../../providers/AuthProvider';
import { FormEventHandler, useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { LoginBox, LoginBoxContent, LoginBoxForm, LoginBoxHero, LoginBoxRegister } from './LoginPage.styles';
import { updatePanelStorage } from '../../services/storage';

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const client = useApolloClient();
  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      updatePanelStorage(signIn);
      client.resetStore();
    },
    onError: () => null,
  });

  const state = (useLocation().state || {}) as { pathname?: string };
  if (useIsLogged()) return <Navigate to={state.pathname || '/'} />;

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    signIn({ variables: { email, password } });
  };
  return (
    <LoginBox>
      <LoginBoxHero>Stay in contact</LoginBoxHero>
      <LoginBoxContent>
        <LoginBoxForm onSubmit={onSubmit}>
          <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Login</Button>
        </LoginBoxForm>
        <LoginBoxRegister>
          <StyledText size="s">{"Don't have account?"}</StyledText> <Button>Register now!</Button>
        </LoginBoxRegister>
      </LoginBoxContent>
    </LoginBox>
  );
};

export default LoginPage;
