import { Key } from 'react';
import { useQuery } from '@apollo/client';
import Page from '../../components/Page/Page';
import { useAuth } from '../../providers/AuthProvider';
import ChatBoxItem from './components/ChatBoxItem/ChatBoxItem';
import NewChatBox from './components/NewChatBox';
import { ChatsList } from './ChatsPage.styles';
import { GET_CHATS, IGetChatsArgs, IGetChatsData } from '../../apollo/queries/queries';

const ChatsPage = () => {
  const { user } = useAuth();
  const { data } = useQuery<IGetChatsData, IGetChatsArgs>(GET_CHATS, { variables: { userId: user.id } });
  if (!data) return null;
  return (
    <Page header="ChatBoxes">
      <NewChatBox />
      <ChatsList>
        {data.chats.map((chat) => (
          <ChatBoxItem key={chat.id as Key} {...chat} />
        ))}
      </ChatsList>
    </Page>
  );
};

export default ChatsPage;
