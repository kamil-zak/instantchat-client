import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import ROUTES from '../constants/routes';
import ProtectedPanel from './components/ProtectedPanel';
import LoginPage from '../pages/Login/LoginPage';
import MessagesPage from '../pages/Messages/MessagesPage';
import ChatsPage from '../pages/Chats/ChatsPage';

const RoutesSwitch = () => {
  return (
    <BrowserRouter basename="/panel">
      <Routes>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route element={<ProtectedPanel />}>
          <Route path={ROUTES.messages} element={<MessagesPage />}>
            <Route path=":conversationId" element={<MessagesPage />} />
          </Route>
          <Route path={ROUTES.chats} element={<ChatsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.messages} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesSwitch;
