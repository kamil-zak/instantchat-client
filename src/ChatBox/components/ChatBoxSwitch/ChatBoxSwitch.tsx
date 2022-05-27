import { useEffect, useState } from 'react';
import ChatButton from '../../../components/ChatButton/ChatButton';
import { chatBoxButtonDimensions, chatBoxDimensions } from '../../../constants/config';
import ChatBox from '../ChatBox/ChatBox';

const ChatBoxSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const instantchatDimensions = isOpen ? chatBoxDimensions : chatBoxButtonDimensions;
    window?.top?.postMessage({ instantchatDimensions }, '*');
  }, [isOpen]);

  if (isOpen) return <ChatBox onClose={() => setIsOpen(false)} />;
  return <ChatButton onClick={() => setIsOpen(true)} />;
};

export default ChatBoxSwitch;
