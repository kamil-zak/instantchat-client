export const QUERY_MESSAGES_COUNT = 25;

export const GRAPHQL_URL = import.meta.env.PROD ? '/graphql' : 'http://localhost:3434/graphql';

export const WS_URL = import.meta.env.PROD
  ? window.location.href.replace(/^http(s?:\/\/.*?)\/.*$/, `ws$1/graphql`)
  : 'ws://localhost:3434/graphql';

export const ChatBoxButtonDimensions = { width: 100, height: 70 };
export const ChatBoxDimensions = { width: 300, height: 500 };
