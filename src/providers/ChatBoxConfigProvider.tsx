import { createContext, FC, useContext } from 'react';

interface IChatBoxConfig {
  title: string;
  subtitle: string;
}

const ChatBoxConfigContext = createContext<IChatBoxConfig | null>(null);

export const useChatBoxConfig = () => {
  const chatBoxConfig = useContext(ChatBoxConfigContext);
  if (!chatBoxConfig) throw new Error('');
  return chatBoxConfig;
};

interface IAuthProviderProps {
  children?: React.ReactNode;
  config: IChatBoxConfig;
}

export const ChatBoxConfigProvider: FC<IAuthProviderProps> = ({ children, config }) => {
  return <ChatBoxConfigContext.Provider value={config}>{children}</ChatBoxConfigContext.Provider>;
};
