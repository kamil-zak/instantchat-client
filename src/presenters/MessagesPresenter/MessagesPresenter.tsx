import { forwardRef, Key } from 'react';
import TypingDots from '../../components/TypingDots/TypingDots';
import { IMessage } from '../../interfaces/message';
import MessageForm from './MessageForm/MessageForm';
import MessageItem from './MessageItem/MessageItem';
import { MessagesList, MessagesWrapper } from './MessagesPresenter.styles';

interface IMessagesPresenterProps {
  messages: IMessage[];
  onSend?: (content: string) => void;
  onType?: () => void;
  isTyping?: boolean;
  isChatBox?: boolean;
}

const MessagesPresenter = forwardRef<HTMLDivElement, IMessagesPresenterProps>(
  ({ messages, onSend, onType, isChatBox, isTyping = false }, ref) => {
    return (
      <MessagesWrapper>
        <MessagesList ref={ref}>
          {messages.map((message) => (
            <MessageItem key={message.id as Key} {...message} isChatBox={isChatBox} />
          ))}
          <TypingDots isVisible={isTyping} />
        </MessagesList>
        <MessageForm onSend={onSend} onType={onType} />
      </MessagesWrapper>
    );
  },
);

MessagesPresenter.displayName = 'MessagesPresenter';

export default MessagesPresenter;
