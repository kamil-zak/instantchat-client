import Button from '../../../../components/Button/Button';
import StyledText from '../../../../components/StyledText/StyledText';
import { SERVER } from '../../../../constants/config';
import { IChat } from '../../../../interfaces/chat';
import { ChatBoxItemWrapper } from './ChatBoxItem.styles';

const getScript = (id: string) => `<script src='${SERVER}/chatbox.js?chatId=${id}'></script>`;

const ChatBoxItem = ({ id, name }: IChat) => {
  return (
    <ChatBoxItemWrapper>
      <StyledText>Name: {name}</StyledText>
      <a href={`${SERVER}/chatbox/${id}`} target="_blank" rel="noreferrer">
        <Button>Open test ChatBox</Button>
      </a>

      <StyledText size="s">Insert this fragment in HEAD section:</StyledText>
      <textarea defaultValue={getScript(id)}></textarea>
    </ChatBoxItemWrapper>
  );
};

export default ChatBoxItem;
