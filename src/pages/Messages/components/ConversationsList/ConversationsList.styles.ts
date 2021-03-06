import styled from 'styled-components';

export const ConversationsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export const ConversationsListEmpty = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
