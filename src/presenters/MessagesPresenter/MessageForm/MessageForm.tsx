import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { ResponseFormInput, ResponseFormSubmit, ResponseFormWrapper } from './MessageForm.styles';

interface IMessageFormProps {
  onSend: (message: string) => void;
}

const MessageForm = ({ onSend }: IMessageFormProps) => {
  const [response, setResponse] = useState('');

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (response) onSend(response);
    setResponse('');
  };

  return (
    <ResponseFormWrapper onSubmit={submit}>
      <ResponseFormInput value={response} onChange={(e) => setResponse(e.target.value)}></ResponseFormInput>
      <ResponseFormSubmit>
        <FontAwesomeIcon size="2x" icon={faPaperPlane} />
      </ResponseFormSubmit>
    </ResponseFormWrapper>
  );
};

export default MessageForm;
