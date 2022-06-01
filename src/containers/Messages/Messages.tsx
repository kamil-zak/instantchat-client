import { useMutation, useQuery, useSubscription } from '@apollo/client';
import { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';
import { IIsTypingArgs, IS_TYPING, IS_TYPING_WIDGET } from '../../apollo/gql/mutations/conversation';
import { GET_MESSAGES, GET_MESSAGES_WIDGET, IGetMessagesArgs, IGetMessagesData } from '../../apollo/gql/queries/message';
import { IIsTypingSubArgs, IS_TYPING_SUB, IS_TYPING_SUB_WIDGET } from '../../apollo/gql/subscriptions/conversation';
import { LoadingBar } from '../../components/LoadingBar/LoadingBar';
import { QUERY_MESSAGES_COUNT } from '../../constants/config';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import useScrollDown from '../../hooks/useScrollDown';
import MessagesPresenter from '../../presenters/MessagesPresenter/MessagesPresenter';

interface IMessagesProps {
  conversationId: string | null;
  isChatBox?: boolean;
  onSend: (message: string) => void;
}

const Messages = ({ conversationId: id, onSend, isChatBox }: IMessagesProps) => {
  const conversationId = id || '';

  const { data, fetchMore, loading } = useQuery<IGetMessagesData, IGetMessagesArgs>(isChatBox ? GET_MESSAGES_WIDGET : GET_MESSAGES, {
    variables: { conversationId, limit: QUERY_MESSAGES_COUNT },
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
    setIsTyping(false);
  }, [lastId, scrollDown]);

  useInfiniteScroll(messagesRef, getMore);

  const [isTyping, setIsTyping] = useState(false);
  const { data: typingData } = useSubscription<any, IIsTypingSubArgs>(isChatBox ? IS_TYPING_SUB : IS_TYPING_SUB_WIDGET, {
    variables: { conversationId },
  });
  useEffect(() => {
    if (!typingData) return;
    setIsTyping(true);
    const disableTyping = () => setIsTyping(false);
    const timeout = setTimeout(disableTyping, 1500);
    return () => clearTimeout(timeout);
  }, [typingData]);

  const [sendTyping] = useMutation<any, IIsTypingArgs>(isChatBox ? IS_TYPING_WIDGET : IS_TYPING, { variables: { conversationId } });
  if (loading) return <LoadingBar />;
  return (
    <MessagesPresenter
      ref={messagesRef}
      messages={messages}
      onSend={onSend}
      onType={() => sendTyping()}
      isChatBox={isChatBox}
      isTyping={isTyping}
    />
  );
};

export default Messages;
