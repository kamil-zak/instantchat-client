import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import { ChatBoxCloseBtn, ChatBoxHeader, ChatBoxWrapper } from './ChatBoxPresenter.styles';

interface IChatBoxPresenterProps {
  children: ReactNode;
  onClose: () => void;
}

const ChatBoxPresenter = ({ children, onClose }: IChatBoxPresenterProps) => {
  return (
    <ChatBoxWrapper>
      <ChatBoxHeader>
        Skontaktuj się z nami
        <ChatBoxCloseBtn onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </ChatBoxCloseBtn>
      </ChatBoxHeader>
      {children}
    </ChatBoxWrapper>
  );
};

export default ChatBoxPresenter;
