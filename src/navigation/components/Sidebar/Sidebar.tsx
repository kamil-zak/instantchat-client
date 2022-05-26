import { faComments, faMessage, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../components/IconButton/IconButton';
import ROUTES from '../../../constants/routes';
import useUserSubscribe from '../../../hooks/useUserSubscribe';
import { useAuth } from '../../../providers/AuthProvider';
import NavigationLink from '../NavigationLink/NavigationLink';
import { LogoutWrapper, SidebarWrapper } from './Sidebar.styles';

const Sidebar = () => {
  const { logout } = useAuth();
  useUserSubscribe();
  return (
    <SidebarWrapper>
      <NavigationLink to={ROUTES.messages} icon={faMessage} />
      <NavigationLink to={ROUTES.chats} icon={faComments} />
      <NavigationLink to={ROUTES.user} icon={faUser} />
      <LogoutWrapper>
        <IconButton onClick={logout} icon={faRightFromBracket} />
      </LogoutWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
