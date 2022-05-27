import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { hexRegex } from './format';

export interface IChatBoxFormFields {
  name: string;
  title: string;
  subtitle: string;
  color: string;
}

const chatBoxFormSchema = yup
  .object({
    name: yup.string().max(20).required(),
    title: yup.string().max(20).required(),
    subtitle: yup.string().max(30),
    color: yup.string().matches(hexRegex, 'Incorrect hex value'),
  })
  .required();

export const chatBoxFormResolver = yupResolver(chatBoxFormSchema);
