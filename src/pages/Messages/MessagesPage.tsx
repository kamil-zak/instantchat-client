import { useParams } from 'react-router';
import { MessagesPageWrapper } from './MessagesPage.styles';
import ConversationsList from './components/ConversationsList/ConversationsList';
import MessagesList from './components/MessagesList/MessagesList';
import Page from '../../components/Page/Page';

const MessagesPage = () => {
  const { conversationId } = useParams();
  return (
    <Page header="Messages">
      <MessagesPageWrapper>
        <ConversationsList />
        {conversationId && <MessagesList />}
      </MessagesPageWrapper>
    </Page>
  );
};

export default MessagesPage;
