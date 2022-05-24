import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Messages from '../../../common/Messages/Messages';
import { ChatBoxCloseBtn, ChatBoxHeader, ChatBoxWrapper } from './ChatBox.styles';
import { useState } from 'react';
import { chatBoxId, getConversationId, updateChatBoxStorage } from '../../../services/storage';
import { useMutation, useSubscription } from '@apollo/client';
import { CREATE_CONVERSATION, ICreateConversationData } from '../../../apollo/queries/conversation';
import { CHATBOX_MESSAGE_SUB, GET_ONLY_MESSAGES, ISendMessageArgs, SEND_MESSAGE } from '../../../apollo/queries/message';

interface IChatBoxProps {
  onClose: () => void;
}

const ChatBox = ({ onClose }: IChatBoxProps) => {
  const [id, setId] = useState(getConversationId());

  useSubscription(CHATBOX_MESSAGE_SUB, {
    variables: { conversationId: id },
    skip: !id,
    onSubscriptionData: ({ client, subscriptionData }) => {
      const newMessage = subscriptionData.data?.newMessage;
      if (!newMessage) return;
      const data = { getMessages: { messages: [newMessage.message] } };
      client.writeQuery({ query: GET_ONLY_MESSAGES, data, variables: { conversationId: id } });
    },
  });

  const [createConversationMutate] = useMutation<ICreateConversationData>(CREATE_CONVERSATION, {
    variables: { chatId: chatBoxId },
    onCompleted: ({ createConversation: conversationData }) => {
      setId(conversationData.id);
      updateChatBoxStorage(conversationData);
    },
  });

  const [sendMessageMutate] = useMutation<string, ISendMessageArgs>(SEND_MESSAGE);

  const sendMessage = async (content: string) => {
    const conversationId = id || (await createConversationMutate()).data?.createConversation?.id;
    if (!conversationId) return;
    await sendMessageMutate({ variables: { conversationId, content, isResponse: false } });
  };

  return (
    <ChatBoxWrapper>
      <ChatBoxHeader>
        Skontaktuj się z nami!
        <ChatBoxCloseBtn onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </ChatBoxCloseBtn>
      </ChatBoxHeader>
      <Messages conversationId={id} onSend={sendMessage} isChatBox />
    </ChatBoxWrapper>
  );
};

export default ChatBox;
