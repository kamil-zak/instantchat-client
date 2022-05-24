import { MessagesPageWrapper } from './MessagesPage.styles';
import ConversationsList from './components/ConversationsList/ConversationsList';
import Page from '../../components/Page/Page';
import MessageSection from './components/MessagesSection/MessagesSection';

const MessagesPage = () => {
  return (
    <Page header="Messages">
      <MessagesPageWrapper>
        <ConversationsList />
        <MessageSection />
      </MessagesPageWrapper>
    </Page>
  );
};

export default MessagesPage;
