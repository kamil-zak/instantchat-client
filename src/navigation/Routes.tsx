import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import ROUTES from '../constants/routes';
import ProtectedPanel from './components/ProtectedPanel';
import LoginPage from '../pages/Login/LoginPage';
import MessagesPage from '../pages/Messages/MessagesPage';
import ChatsPage from '../pages/Chats/ChatsPage';
import NewChatPage from '../pages/NewChat/NewChatPage';
import EditChatPage from '../pages/EditChat/EditChatPage';

const RoutesSwitch = () => {
  return (
    <BrowserRouter basename="/panel">
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route element={<ProtectedPanel />}>
          <Route path={ROUTES.messages} element={<MessagesPage />}>
            <Route path=":conversationId" element={<MessagesPage />} />
          </Route>
          <Route path={ROUTES.chats}>
            <Route path="new" element={<NewChatPage />} />
            <Route path="edit/:chatId" element={<EditChatPage />} />
            <Route path="" element={<ChatsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.messages} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitch;
