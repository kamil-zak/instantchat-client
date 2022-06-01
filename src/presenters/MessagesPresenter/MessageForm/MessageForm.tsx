import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FormEventHandler } from 'react';
import { useState } from 'react';
import { ResponseFormInput, ResponseFormSubmit, ResponseFormWrapper } from './MessageForm.styles';

interface IMessageFormProps {
  onSend?: (message: string) => void;
  onType?: () => void;
}

const MessageForm = ({ onSend, onType }: IMessageFormProps) => {
  const [response, setResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (response) onSend?.(response);
    setResponse('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (!isTyping && value > response) {
      setIsTyping(true);
      onType?.();
      setTimeout(() => setIsTyping(false), 1000);
    }
    setResponse(value);
  };

  return (
    <ResponseFormWrapper onSubmit={submit}>
      <ResponseFormInput value={response} onChange={handleChange} />
      <ResponseFormSubmit>
        <FontAwesomeIcon size="2x" icon={faPaperPlane} />
      </ResponseFormSubmit>
    </ResponseFormWrapper>
  );
};

export default MessageForm;
