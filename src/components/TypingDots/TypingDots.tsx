import styled, { keyframes } from 'styled-components';

const dotMove = keyframes`
    0% {
        transform: translateY(0)
    }

    30% {
        transform: translateY(-100%)
    }

    60% {
        transform: translateY(0)
    }

    100% {
        transform: translateY(0)
    }

`;

interface ITypingDotsProps {
  isVisible: boolean;
}

const TypingDotsWrapper = styled.div<ITypingDotsProps>`
  display: flex;
  gap: 5px;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
`;

const TypingDot = styled.div.attrs(({ theme }) => ({
  style: { background: theme.colors.primary },
}))<{ delay: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: ${dotMove} 0.8s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

export const TypingDots = ({ isVisible }: ITypingDotsProps) => {
  return (
    <TypingDotsWrapper isVisible={isVisible}>
      <TypingDot delay="0" />
      <TypingDot delay="0.15" />
      <TypingDot delay="0.3" />
    </TypingDotsWrapper>
  );
};

export default TypingDots;
