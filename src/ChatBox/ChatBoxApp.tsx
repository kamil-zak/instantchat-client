import { useEffect, useState } from 'react';
import { ChatBoxButtonDimensions, ChatBoxDimensions } from '../constants/config';
import ChatBox from './components/ChatBox/ChatBox';
import ChatButton from './components/ChatButton/ChatButton';

const ChatBoxApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const instantchatDimensions = isOpen ? ChatBoxDimensions : ChatBoxButtonDimensions;
    window?.top?.postMessage({ instantchatDimensions }, '*');
  }, [isOpen]);

  return isOpen ? <ChatBox onClose={() => setIsOpen(false)} /> : <ChatButton onClick={() => setIsOpen(true)} />;
};

export default ChatBoxApp;
