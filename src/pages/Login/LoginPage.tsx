import { useMutation } from '@apollo/client';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import StyledText from '../../components/StyledText/StyledText';
import { useIsLogged } from '../../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { LoginBox, LoginBoxContent, LoginBoxForm, LoginBoxHero, LoginBoxRegister } from './LoginPage.styles';
import { setUserToken } from '../../services/auth';
import { toast } from 'react-toastify';
import { ISignInArgs, ISignInData, SIGN_IN } from '../../apollo/gql/mutations/user';
import { useForm } from 'react-hook-form';
import { ILoginFormFields } from '../../utils/validations';

const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILoginFormFields>();

  const [signIn, { loading }] = useMutation<ISignInData, ISignInArgs>(SIGN_IN, {
    update: (_, { data }) => {
      if (data) setUserToken(data.signInData.token);
    },
    refetchQueries: ['userPayload'],
    onError: () => toast.error('Nie udało sie zalogować'),
  });

  const state = (useLocation().state || {}) as { pathname?: string };
  if (useIsLogged()) return <Navigate to={state.pathname || '/'} />;

  const onSubmit = ({ email, password }: ILoginFormFields) => {
    signIn({ variables: { email, password } });
  };
  return (
    <LoginBox>
      <LoginBoxHero>Stay in contact</LoginBoxHero>
      <LoginBoxContent>
        <LoginBoxForm onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="E-mail" {...register('email')} />
          <Input placeholder="Password" type="password" {...register('password')} />
          <Button type="submit" spinner={loading}>
            Login
          </Button>
        </LoginBoxForm>
        <LoginBoxRegister>
          <StyledText size="s">{"Don't have account?"}</StyledText> <Button>Register now!</Button>
        </LoginBoxRegister>
      </LoginBoxContent>
    </LoginBox>
  );
};

export default LoginPage;
