import { gql } from '@apollo/client';

export interface ISignInData {
  signInData: {
    token: string;
  };
}
export interface ISignInArgs {
  email: string;
  password: string;
}
export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signInData: signIn(email: $email, password: $password) {
      token
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    signOut
  }
`;
