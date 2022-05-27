import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';
import StyledText from '../../components/StyledText/StyledText';
import { ChatBoxCloseBtn, ChatBoxHeader, ChatBoxWrapper } from './ChatBoxPresenter.styles';

interface IChatBoxPresenterProps {
  children?: ReactNode;
  onClose?: () => void;
  title: string;
  subtitle: string;
}

const ChatBoxPresenter = ({ children, onClose, title, subtitle }: IChatBoxPresenterProps) => {
  return (
    <ChatBoxWrapper>
      <ChatBoxHeader>
        <StyledText size="base">{title || 'Contact us'}</StyledText>
        <StyledText size="xxs">{subtitle}</StyledText>
        <ChatBoxCloseBtn onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </ChatBoxCloseBtn>
      </ChatBoxHeader>
      {children}
    </ChatBoxWrapper>
  );
};

export default ChatBoxPresenter;
