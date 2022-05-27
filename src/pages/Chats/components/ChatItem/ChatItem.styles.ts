import styled from 'styled-components';

export const ChatItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ChatItemColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  gap: 30px;
`;

export const ChatItemButtons = styled.div`
  display: flex;
`;

export const ChatItemPreview = styled.div`
  height: 100px;
  overflow: hidden;
`;
