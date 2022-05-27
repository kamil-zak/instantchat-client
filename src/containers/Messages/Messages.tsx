import { useQuery } from '@apollo/client';
import { useCallback, useRef } from 'react';
import { useEffect } from 'react';
import { GET_MESSAGES, IGetMessagesArgs, IGetMessagesData } from '../../apollo/gql/queries/message';
import { QUERY_MESSAGES_COUNT } from '../../constants/config';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useScrollDown from '../../hooks/useScrollDown';
import MessagesPresenter from '../../presenters/MessagesPresenter/MessagesPresenter';

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
  const scrollDown = useScrollDown(messagesRef);

  const { messages = [], hasMore = false } = data?.messagesData || {};
  const firstId = messages?.[0]?.id;
  const lastId = messages[messages.length - 1]?.id;

  const getMore = useCallback(() => {
    if (hasMore) fetchMore({ variables: { before: firstId } });
  }, [firstId, hasMore, fetchMore]);

  const shouldGetMore = hasMore && messages.length < QUERY_MESSAGES_COUNT;
  useEffect(() => {
    if (!shouldGetMore) return;
    getMore();
    return () => scrollDown();
  }, [shouldGetMore, getMore, scrollDown]);

  useEffect(() => {
    scrollDown();
  }, [lastId, scrollDown]);

  useInfiniteScroll(messagesRef, getMore);

  return <MessagesPresenter ref={messagesRef} messages={messages} onSend={onSend} isChatBox={isChatBox} />;
};

export default Messages;
