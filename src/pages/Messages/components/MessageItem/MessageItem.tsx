import StyledText from '../../../../components/StyledText/StyledText';
import { IMessage } from '../../../../interfaces/message';
import { formatTime } from '../../../../utils/format';
import { MessageItemContent, MessageItemTime, MessageItemWrapper } from './MessageItem.styles';

const MessageItem = ({ content, time, isResponse }: IMessage) => {
  return (
    <MessageItemWrapper isResponse={isResponse}>
      <MessageItemContent isResponse={isResponse}>{content}</MessageItemContent>
      <MessageItemTime isResponse={isResponse}>
        <StyledText size="xxs">{formatTime(time)}</StyledText>
      </MessageItemTime>
    </MessageItemWrapper>
  );
};

export default MessageItem;
