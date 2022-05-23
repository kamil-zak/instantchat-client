import { useMutation } from '@apollo/client';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISendResponseArgs, SEND_RESPONSE } from '../../../../apollo/queries/message';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { ResponseFormInput, ResponseFormSubmit, ResponseFormWrapper } from './ResponseForm.styles';

const ResponseForm = () => {
  const { conversationId = '' } = useParams();
  const [response, setResponse] = useState('');

  const [send] = useMutation<string, ISendResponseArgs>(SEND_RESPONSE, {
    variables: { conversationId, content: response },
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (response) send();
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

export default ResponseForm;
