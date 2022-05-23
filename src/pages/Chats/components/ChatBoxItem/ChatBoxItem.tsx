import Button from '../../../../components/Button/Button';
import StyledText from '../../../../components/StyledText/StyledText';
import { IChat } from '../../../../interfaces/chat';
import { ChatBoxItemWrapper } from './ChatBoxItem.styles';

const getScript = (id: string) => `test id ${id}`;

const ChatBoxItem = ({ id, name }: IChat) => {
  return (
    <ChatBoxItemWrapper>
      <StyledText>Name: {name}</StyledText>
      <a href={`/chatbox/${id}`} target="_blank" rel="noreferrer">
        <Button>Open test ChatBox</Button>
      </a>

      <StyledText size="s">Insert this fragment in HEAD section:</StyledText>
      <textarea defaultValue={getScript(id)}></textarea>
    </ChatBoxItemWrapper>
  );
};

export default ChatBoxItem;
