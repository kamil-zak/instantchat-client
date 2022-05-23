import styled from 'styled-components';

export const MessagesListWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100vh - 140px) 50px;
`;

export const Messages = styled.div`
  overflow-y: scroll;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
