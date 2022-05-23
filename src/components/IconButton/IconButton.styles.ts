import styled from 'styled-components';

export const IconButtonWrapper = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: white;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: darkblue;
  cursor: pointer;
  border: 0;
`;
