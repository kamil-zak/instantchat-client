interface IPanelStorage {
  token: string;
  refreshToken?: string;
}

interface IChatBoxStorage {
  token: string;
  id: string;
}

export const chatBoxId = new URLSearchParams(window.location.search).get('chatId');

export const getToken = () => {
  return localStorage.getItem(chatBoxId ? `conversationToken:${chatBoxId}` : 'token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const updatePanelStorage = (tokens: IPanelStorage) => {
  localStorage.setItem('token', tokens.token);
  if (tokens.refreshToken) localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const updateChatBoxStorage = (storage: IChatBoxStorage) => {
  localStorage.setItem(`conversationToken:${chatBoxId}`, storage.token);
  localStorage.setItem(`conversationId:${chatBoxId}`, storage.id);
};

export const getConversationId = () => {
  return localStorage.getItem(`conversationId:${chatBoxId}`);
};

export const clearPanelStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};
