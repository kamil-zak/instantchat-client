import { useNavigate } from 'react-router';
import Button from '../../../../components/Button/Button';
import Flex from '../../../../components/Flex/Flex';
import StyledText from '../../../../components/StyledText/StyledText';
import ROUTES from '../../../../constants/routes';
import { ConversationsEmptyWrapper } from './ConversationsEmpty.styles';

export const ConversationsEmpty = () => {
  const navigate = useNavigate();

  return (
    <ConversationsEmptyWrapper>
      <Flex gap={5}>
        <StyledText size="s" center>
          No messages
        </StyledText>
        <StyledText size="xs" color="gray" center>
          Are you sure ChatBox is on your website?
        </StyledText>
      </Flex>
      <Button onClick={() => navigate('/' + ROUTES.chats)}>Go to Chats</Button>
    </ConversationsEmptyWrapper>
  );
};

export default ConversationsEmpty;
