import Messages from '../../../containers/Messages/Messages';
import { useState } from 'react';
import { chatBoxId, getConversationId, updateConversation } from '../../../services/chatbox';
import { useMutation } from '@apollo/client';
import ChatBoxPresenter from '../../../presenters/ChatBoxPresenter/ChatBoxPresenter';
import useConversationSubscribe from '../../../hooks/useConversationSubscribe';
import { CREATE_CON, ICreateConArgs, ICreateConData, ISendMessageArgs, SEND_MESSAGE } from '../../../apollo/queries/mutations';

interface IChatBoxProps {
  onClose: () => void;
}

const ChatBox = ({ onClose }: IChatBoxProps) => {
  const [id, setId] = useState(getConversationId());

  useConversationSubscribe(id);

  const [createConversation] = useMutation<ICreateConData, ICreateConArgs>(CREATE_CON, {
    variables: { chatId: chatBoxId },
    onCompleted: ({ conversationData }) => {
      setId(conversationData.id);
      updateConversation(conversationData);
    },
  });

  const [send] = useMutation<string, ISendMessageArgs>(SEND_MESSAGE);
  const sendMessage = async (content: string) => {
    const conversationId = id || (await createConversation()).data?.conversationData?.id;
    if (!conversationId) return;
    await send({ variables: { conversationId, content, isResponse: false } });
  };

  return (
    <ChatBoxPresenter onClose={onClose}>
      <Messages conversationId={id} onSend={sendMessage} isChatBox />
    </ChatBoxPresenter>
  );
};

export default ChatBox;
