import Input from '../Input/Input';
import { useFormContext } from 'react-hook-form';
import StyledText from '../StyledText/StyledText';
import { FormFieldWrapper } from './FormField.styles';

interface IFormFieldProps {
  name: string;
  placeholder?: string;
  label?: string;
  max?: number;
}

const FormField = ({ name, placeholder, label, max }: IFormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = !!errors[name];
  const inputProps = {
    ...register(name),
    placeholder,
    danger: isError,
    maxLength: max,
  };

  return (
    <FormFieldWrapper>
      <StyledText color={isError ? 'danger' : 'primary'} size="xxs">
        {label}
      </StyledText>
      <Input {...inputProps} autoComplete="off" />
      <StyledText color="danger" size="xs">
        {errors[name]?.message}
      </StyledText>
    </FormFieldWrapper>
  );
};

export default FormField;
