import styled from 'styled-components';

export const LoginBox = styled.div`
  position: relative;
  width: 1100px;
  height: 550px;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    width: 500px;
    height: 100%;
    transform: rotate(15deg) scale(1.5) translateX(-100px);
    z-index: -1;
  }
`;

export const LoginBoxHero = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: white;
  display: flex;
  align-items: center;
  padding: 30px;
`;

export const LoginBoxContent = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  align-items: center;
`;

export const LoginBoxForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const LoginBoxRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
