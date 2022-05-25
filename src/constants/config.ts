export const QUERY_MESSAGES_COUNT = 25;

export const SERVER = import.meta.env.VITE_SERVER;
export const GRAPHQL_URL = `/graphql`;
export const WS_URL = window.location.href.replace(/^http(s?:\/\/.*?)\/.*$/, `ws$1/graphql`);

export const chatBoxButtonDimensions = { width: 100, height: 70 };
export const chatBoxDimensions = { width: 300, height: 500 };
