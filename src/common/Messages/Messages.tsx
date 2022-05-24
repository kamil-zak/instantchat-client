import { useQuery } from '@apollo/client';
import { Key, MouseEventHandler, useCallback, useRef } from 'react';
import MessageForm from './MessageForm/MessageForm';
import { useEffect } from 'react';
import { MessagesList, MessagesListWrapper } from './Messages.styles';
import MessageItem from './MessageItem/MessageItem';
import { QUERY_MESSAGES_COUNT } from '../../constants/config';
import { GET_MESSAGES, IGetMessagesArgs, IGetMessagesData } from '../../apollo/queries/message';

interface IMessagesProps {
  conversationId: string | null;
  isChatBox?: boolean;
  onSend: (message: string) => void;
}

const Messages = ({ conversationId, onSend, isChatBox }: IMessagesProps) => {
  const { data, fetchMore } = useQuery<IGetMessagesData, IGetMessagesArgs>(GET_MESSAGES, {
    variables: { conversationId: conversationId || '', limit: QUERY_MESSAGES_COUNT },
    skip: !conversationId,
  });
  const messagesRef = useRef<HTMLDivElement>(null);

  const { messages = [], hasMore = false } = data?.getMessages || {};

  const firstId = messages?.[0]?.id;
  const lastId = messages[messages.length - 1]?.id;

  const getMore = useCallback(() => {
    if (hasMore) fetchMore({ variables: { before: firstId } });
  }, [firstId, hasMore, fetchMore]);

  const scrollDown = useCallback(() => {
    const { current } = messagesRef;
    if (!current) return;
    const { scrollHeight } = current;
    current.scroll(0, scrollHeight);
  }, []);

  const shouldGetMore = hasMore && messages.length < QUERY_MESSAGES_COUNT;

  useEffect(() => {
    if (!shouldGetMore) return;
    getMore();
    return () => scrollDown();
  }, [shouldGetMore, getMore, scrollDown]);

  useEffect(() => {
    scrollDown();
  }, [lastId, scrollDown]);

  useEffect(() => {
    if (!messagesRef.current) return;
    let lastMessageDiv: HTMLDivElement;

    const listener: MouseEventHandler<HTMLDivElement> = (e) => {
      if (!(e.currentTarget.scrollTop === 0)) return;
      lastMessageDiv = messagesRef.current?.firstElementChild as HTMLDivElement;
      getMore();
    };
    const messagesDiv = messagesRef.current;
    messagesDiv.addEventListener('scroll', listener as any);

    return () => {
      messagesDiv.removeEventListener('scroll', listener as any);
      if (messagesDiv && lastMessageDiv) messagesDiv.scrollTop = lastMessageDiv.offsetTop;
    };
  }, [getMore]);
  return (
    <MessagesListWrapper>
      <MessagesList ref={messagesRef}>
        {messages.map((message) => (
          <MessageItem key={message.id as Key} {...message} isChatBox={isChatBox} />
        ))}
      </MessagesList>
      <MessageForm onSend={onSend} />
    </MessagesListWrapper>
  );
};

export default Messages;
