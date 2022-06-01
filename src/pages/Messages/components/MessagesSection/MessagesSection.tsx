import { useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import { ISendMessageArgs, ISendMessageData, SEND_MESSAGE } from '../../../../apollo/gql/mutations/message';
import Messages from '../../../../containers/Messages/Messages';
import { MessagesSectionWrapper } from './MessagesSection.styles';

const MessageSection = () => {
  const { conversationId = '' } = useParams();

  const [sendMessage] = useMutation<ISendMessageData, ISendMessageArgs>(SEND_MESSAGE);

  const send = (content: string) => {
    sendMessage({ variables: { content, conversationId } });
  };

  return <MessagesSectionWrapper>{conversationId && <Messages conversationId={conversationId} onSend={send} />}</MessagesSectionWrapper>;
};
export default MessageSection;
