import StyledText from '../../../components/StyledText/StyledText';
import { IMessage } from '../../../interfaces/message';
import { formatTime } from '../../../utils/format';
import { MessageItemContent, MessageItemTime, MessageItemWrapper } from './MessageItem.styles';

interface IMessageItemProps extends IMessage {
  isChatBox?: boolean;
}

const MessageItem = ({ content, time, isResponse, isChatBox }: IMessageItemProps) => {
  const response = isChatBox ? !isResponse : isResponse;

  return (
    <MessageItemWrapper isResponse={response}>
      <MessageItemContent isResponse={response}>{content}</MessageItemContent>
      <MessageItemTime isResponse={response}>
        <StyledText size="xxs">{formatTime(time)}</StyledText>
      </MessageItemTime>
    </MessageItemWrapper>
  );
};

export default MessageItem;
