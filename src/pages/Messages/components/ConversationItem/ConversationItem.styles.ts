import styled, { css } from 'styled-components';

interface IWrapperProps {
  isActive: boolean;
}

export const ConversationItemWrapper = styled.div<IWrapperProps>`
  display: grid;
  gap: 10px;
  grid-template-columns: min-content 180px 1fr;
  justify-items: right;
  align-items: center;
  max-width: 100%;
  padding: 10px 10px;
  ${({ isActive }) =>
    isActive &&
    css`
      background: rgba(0, 0, 0, 0.15);
    `}
`;

export const ConversationItemDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ConversationItemContent = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
