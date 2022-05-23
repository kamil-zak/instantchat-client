interface ITokens {
  token?: string;
  refreshToken?: string;
}

export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const updateTokens = (tokens: ITokens) => {
  tokens.token && localStorage.setItem('token', tokens.token);
  tokens.refreshToken && localStorage.setItem('refreshToken', tokens.refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
};
