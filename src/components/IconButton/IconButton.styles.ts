import styled from 'styled-components';

export const IconButtonWrapper = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: white;
  color: ${({ theme }) => theme.colors.primaryDark};
  width: 60px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
`;
