import { forwardRef, Key } from 'react';
import { IMessage } from '../../interfaces/message';
import MessageForm from './MessageForm/MessageForm';
import MessageItem from './MessageItem/MessageItem';
import { MessagesList, MessagesWrapper } from './MessagesPresenter.styles';

interface IMessagesPresenterProps {
  messages: IMessage[];
  onSend: (content: string) => void;
  isChatBox?: boolean;
}

const MessagesPresenter = forwardRef<HTMLDivElement, IMessagesPresenterProps>(({ messages, onSend, isChatBox }, ref) => {
  return (
    <MessagesWrapper>
      <MessagesList ref={ref}>
        {messages.map((message) => (
          <MessageItem key={message.id as Key} {...message} isChatBox={isChatBox} />
        ))}
      </MessagesList>
      <MessageForm onSend={onSend} />
    </MessagesWrapper>
  );
});

MessagesPresenter.displayName = 'MessagesPresenter';

export default MessagesPresenter;
