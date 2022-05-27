import Flex from '../Flex/Flex';
import StyledText from '../StyledText/StyledText';

interface IToastMsgProps {
  title: string;
  content: string;
}

const ToastMsg = ({ title, content }: IToastMsgProps) => (
  <Flex gap={5}>
    <StyledText size="s" color="primarySuperDark">
      {title}
    </StyledText>
    <StyledText size="xs" color="gray">
      {content}
    </StyledText>{' '}
  </Flex>
);

export default ToastMsg;
