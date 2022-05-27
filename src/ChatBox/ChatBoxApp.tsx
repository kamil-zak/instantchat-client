import { gql, useQuery } from '@apollo/client';
import { IChat } from '../interfaces/chat';
import { ChatBoxConfigProvider } from '../providers/ChatBoxConfigProvider';
import ColorsProvider from '../providers/ColorsProvider';
import { chatBoxId } from '../services/chatbox';
import ChatBoxSwitch from './components/ChatBoxSwitch/ChatBoxSwitch';

interface IGetChatData {
  chat: Pick<IChat, 'title' | 'subtitle' | 'color'>;
}
interface IGetChatArgs {
  chatId: string;
}
const GET_CHAT = gql`
  query ($chatId: ID!) {
    chat: getChat(chatId: $chatId) {
      title
      subtitle
      color
    }
  }
`;

const ChatBoxApp = () => {
  const { data } = useQuery<IGetChatData, IGetChatArgs>(GET_CHAT, { variables: { chatId: chatBoxId } });
  if (!data) return null;
  return (
    <ColorsProvider primary={data.chat.color}>
      <ChatBoxConfigProvider config={data.chat}>
        <ChatBoxSwitch />
      </ChatBoxConfigProvider>
    </ColorsProvider>
  );
};

export default ChatBoxApp;
