import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router';
import { CREATE_CHAT, ICreateChatArgs, ICreateChatData } from '../../apollo/gql/mutations/chat';
import { GET_CHATS, IGetChatsArgs, IGetChatsData } from '../../apollo/gql/queries/chat';
import Page from '../../components/Page/Page';
import ChatBoxEditor from '../../presenters/ChatBoxEditor/ChatBoxEditor';
import { useAuth } from '../../providers/AuthProvider';
import { IChatBoxFormFields } from '../../utils/validations';

const NewChatPage = () => {
  const navigate = useNavigate();

  const [create, { loading }] = useMutation<ICreateChatData, ICreateChatArgs>(CREATE_CHAT, {
    onCompleted: () => navigate('..'),
    update: (cache, { data }) => {
      if (!data) return;
      const newChat = data.createdChat;
      cache.updateQuery<IGetChatsData, IGetChatsArgs>({ query: GET_CHATS }, (data) => {
        if (!data) return;
        return { chats: [...data.chats, newChat] };
      });
    },
  });

  const { userId } = useAuth();
  const createChatBox = (data: IChatBoxFormFields) => {
    create({ variables: { userId, details: data } });
  };

  return (
    <Page header="New ChatBox">
      <ChatBoxEditor onSubmit={createChatBox} isSaving={loading} />
    </Page>
  );
};

export default NewChatPage;
