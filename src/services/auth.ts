import jwtDecode from 'jwt-decode';

const payload: { token: null | string; exp: number } = {
  token: null,
  exp: 0,
};

export const setUserToken = (token: string) => {
  try {
    const data = jwtDecode(token) as { exp: number };
    payload.token = token;
    payload.exp = data.exp;
  } catch {
    payload.token = '';
    payload.exp = 0;
  }
};

let refreshPromise: Promise<string> | null = null;

const refresh = async () => {
  if (payload.token === '') return '';
  try {
    const response = await fetch(`/graphql/refresh`);
    const { token } = await response.json();
    setUserToken(token);
    return token;
  } catch {
    setUserToken('');
    return '';
  }
};

export const getUserToken = () => {
  const { token, exp } = payload;
  const notExpired = exp > Date.now() / 1000 + 5;
  if (token && notExpired) return Promise.resolve(token);
  if (!refreshPromise) refreshPromise = refresh().finally(() => (refreshPromise = null));
  return refreshPromise;
};
