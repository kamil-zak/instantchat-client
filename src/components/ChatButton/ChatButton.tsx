import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { ChatButtonWrapper } from './ChatButton.styles';

interface IChatButtonProps {
  onClick?: () => void;
}

const ChatButton = ({ onClick }: IChatButtonProps) => {
  return (
    <ChatButtonWrapper onClick={onClick}>
      <FontAwesomeIcon icon={faMessage} size="2x" />
      Chat
    </ChatButtonWrapper>
  );
};

export default ChatButton;
