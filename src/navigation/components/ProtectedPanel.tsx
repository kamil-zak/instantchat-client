import ROUTES from '../../constants/routes';
import { useIsLogged } from '../../providers/AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import useUserSubscribe from '../../hooks/useUserSubscribe';

const StyledPanel = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr;
`;

const ProtectedPanel = () => {
  useUserSubscribe();

  const { pathname } = useLocation();

  if (!useIsLogged()) {
    return <Navigate to={ROUTES.login} state={{ pathname }} />;
  }

  return (
    <StyledPanel>
      <Sidebar />
      <Outlet />
    </StyledPanel>
  );
};

export default ProtectedPanel;
