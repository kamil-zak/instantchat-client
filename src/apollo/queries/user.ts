import { gql } from '@apollo/client';
import { IUserPayload } from '../../interfaces/user';

export interface IUserPayloadData {
  userPayload: IUserPayload;
}

export const USER_PAYLOAD = gql`
  query userPayload {
    userPayload {
      id
      email
    }
  }
`;

export const EMPTY_USER_PAYLOAD = gql`
  query {
    userPayload
  }
`;

export const LOGOUT = gql`
  mutation {
    signOut
  }
`;
