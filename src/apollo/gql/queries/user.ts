import { gql } from '@apollo/client';
import { IUserPayload } from '../../../interfaces/user';

export interface IUserPayloadData {
  userPayload: IUserPayload;
}
export const USER_PAYLOAD = gql`
  query userPayload {
    userPayload {
      userId
      email
    }
  }
`;
