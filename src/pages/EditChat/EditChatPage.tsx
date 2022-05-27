import { useMutation, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router';
import { IUpdateChatArgs, IUpdateChatData, UPDATE_CHAT } from '../../apollo/gql/mutations/chat';
import { GET_CHAT, IGetChatData, IGetChatArgs } from '../../apollo/gql/queries/chat';
import Page from '../../components/Page/Page';
import ChatBoxEditor from '../../presenters/ChatBoxEditor/ChatBoxEditor';
import { IChatBoxFormFields } from '../../utils/validations';

const EditChatPage = () => {
  const navigate = useNavigate();
  const { chatId = '' } = useParams();

  const { data } = useQuery<IGetChatData, IGetChatArgs>(GET_CHAT, { variables: { chatId } });

  const [update] = useMutation<IUpdateChatData, IUpdateChatArgs>(UPDATE_CHAT, {
    onCompleted: () => navigate('..'),
  });

  const updateChatBox = (data: IChatBoxFormFields) => {
    update({ variables: { chatId, details: data } });
  };
  if (!data) return null;

  const { name, title, subtitle, color } = data.chat;
  const values = { name, title, subtitle, color };
  return (
    <Page header={`Edit ChatBox ${name}`}>
      <ChatBoxEditor values={values} onSubmit={updateChatBox} />
    </Page>
  );
};

export default EditChatPage;
