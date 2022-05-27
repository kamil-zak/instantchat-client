import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 30px 0;
  flex-direction: column;
`;

export const LogoutWrapper = styled.div`
  margin-top: auto;
`;
