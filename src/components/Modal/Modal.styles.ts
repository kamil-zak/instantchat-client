import AbsoluteWrapper from '../AbsoluteWrapper/AbsoluteWrapper';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

export const Wrapper = styled(AbsoluteWrapper)`
  border-radius: 10px;
  overflow: hidden;
  min-width: 250px;
  background: white;
`;

export const StyledTopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  text-align: right;
  padding: 5px;
  color: white;
`;

export const StyledContent = styled.div`
  padding: 30px;
`;
