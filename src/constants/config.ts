export const QUERY_MESSAGES_COUNT = 25;

export const SERVER = import.meta.env.VITE_SERVER_HTTP;
export const GRAPHQL_URL = `${SERVER}/graphql`;
export const WS_URL = `${import.meta.env.VITE_SERVER_WS}/graphql`;

export const ChatBoxButtonDimensions = { width: 100, height: 70 };
export const ChatBoxDimensions = { width: 300, height: 500 };
