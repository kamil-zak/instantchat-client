import styled from 'styled-components';

export const MessagesWrapper = styled.div`
  display: grid;
  grid-template-rows: calc(100% - 50px) 50px;
  height: 100%;
`;

export const MessagesList = styled.div`
  overflow-y: scroll;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
