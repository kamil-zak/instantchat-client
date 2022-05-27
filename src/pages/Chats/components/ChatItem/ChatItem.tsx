import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { DELETE_CHAT, IDeleteChatArgs, IDeleteChatData } from '../../../../apollo/gql/mutations/chat';
import { GET_CHATS, IGetChatsArgs, IGetChatsData } from '../../../../apollo/gql/queries/chat';
import Button from '../../../../components/Button/Button';
import CopyToClipboard from '../../../../components/CopyToClipboard/CopyToClipboard';
import Flex from '../../../../components/Flex/Flex';
import StyledText from '../../../../components/StyledText/StyledText';
import { SERVER } from '../../../../constants/config';
import { IChat } from '../../../../interfaces/chat';
import ChatBoxPresenter from '../../../../presenters/ChatBoxPresenter/ChatBoxPresenter';
import ColorsProvider from '../../../../providers/ColorsProvider';
import { ChatItemColumns, ChatItemPreview, ChatItemWrapper } from './ChatItem.styles';

const getScript = (id: string) => `<script src='${SERVER}/chatbox.js?chatId=${id}'></script>`;

const ChatBoxItem = ({ id, name, title, subtitle, color }: IChat) => {
  const [deleteChat] = useMutation<IDeleteChatData, IDeleteChatArgs>(DELETE_CHAT, {
    variables: { chatId: id },
    update: (cache) => {
      cache.updateQuery<IGetChatsData, IGetChatsArgs>({ query: GET_CHATS }, (data) => {
        if (!data) return;
        return { chats: data.chats.filter((chat) => chat.id !== id) };
      });
    },
  });
  const navigate = useNavigate();
  return (
    <ChatItemWrapper>
      <ChatItemColumns>
        <Flex alignItems="flex-start">
          <StyledText>{name}</StyledText>
          <a href={`${SERVER}/chatbox/${id}`} target="_blank" rel="noreferrer">
            <Button>Open test ChatBox</Button>
          </a>
        </Flex>
        <Flex alignItems="center">
          <ChatItemPreview>
            <ColorsProvider primary={color}>
              <ChatBoxPresenter title={title} subtitle={subtitle} />
            </ColorsProvider>
          </ChatItemPreview>
          <Flex direction="row">
            <Button onClick={() => navigate(`edit/${id}`)}>Edit</Button>
            <Button onClick={() => deleteChat()} bordered color="danger">
              Delete
            </Button>
          </Flex>
        </Flex>
      </ChatItemColumns>
      <StyledText size="xs">Insert this fragment in HEAD section:</StyledText>
      <CopyToClipboard text={getScript(id)} />
    </ChatItemWrapper>
  );
};

export default ChatBoxItem;
