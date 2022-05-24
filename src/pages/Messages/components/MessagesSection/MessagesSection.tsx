import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { ISendMessageArgs, SEND_MESSAGE } from '../../../../apollo/queries/message';
import Messages from '../../../../common/Messages/Messages';
import { MessagesSectionWrapper } from './MessagesSection.styles';

const MessageSection = () => {
  const { conversationId = '' } = useParams();

  const [sendMessage] = useMutation<string, Partial<ISendMessageArgs>>(SEND_MESSAGE, {
    variables: { conversationId, isResponse: true },
  });

  const send = (content: string) => {
    sendMessage({ variables: { content } });
  };

  return <MessagesSectionWrapper>{conversationId && <Messages conversationId={conversationId} onSend={send} />}</MessagesSectionWrapper>;
};
export default MessageSection;
