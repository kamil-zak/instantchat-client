interface IConversationData {
  token: string;
  id: string;
}

export const chatBoxId = new URLSearchParams(window.location.search).get('chatId');

export const getConversationToken = () => {
  return Promise.resolve(localStorage.getItem(`conversationToken:${chatBoxId}`) || '');
};

export const getConversationId = () => {
  return localStorage.getItem(`conversationId:${chatBoxId}`);
};

export const updateConversation = (conversation: IConversationData) => {
  localStorage.setItem(`conversationToken:${chatBoxId}`, conversation.token);
  localStorage.setItem(`conversationId:${chatBoxId}`, conversation.id);
};
