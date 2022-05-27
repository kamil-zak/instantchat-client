import { Key } from 'react';
import { useQuery } from '@apollo/client';
import Page from '../../components/Page/Page';
import { useAuth } from '../../providers/AuthProvider';
import ChatItem from './components/ChatItem/ChatItem';
import { ChatsList, ChatsPageWrapper } from './ChatsPage.styles';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { GET_CHATS, IGetChatsArgs, IGetChatsData } from '../../apollo/gql/queries/chat';
import LayoutItem from '../../components/LayoutItem/LayoutItem';
import StyledText from '../../components/StyledText/StyledText';
import Flex from '../../components/Flex/Flex';

const ChatsPage = () => {
  const { user } = useAuth();
  const { data } = useQuery<IGetChatsData, IGetChatsArgs>(GET_CHATS, { variables: { userId: user.id } });
  if (!data) return null;
  return (
    <Page header="ChatBoxes">
      <ChatsPageWrapper>
        <LayoutItem align="center">
          <Link to="new">
            <Button>Create ChatBox</Button>
          </Link>
        </LayoutItem>
        <ChatsList>
          {data.chats.map((chat) => (
            <ChatItem key={chat.id as Key} {...chat} />
          ))}
        </ChatsList>
        {!data.chats.length && (
          <Flex gap={5} alignItems="center">
            <StyledText>This place is empty </StyledText>
            <StyledText color="gray" size="s">
              Create your first ChatBox now!
            </StyledText>
          </Flex>
        )}
      </ChatsPageWrapper>
    </Page>
  );
};

export default ChatsPage;
