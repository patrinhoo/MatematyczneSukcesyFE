export const getAccessToken = () => {
  const token = localStorage.getItem('access_token');
  if (token) {
    return JSON.parse(token);
  }
  return false;
};

export const setAccessToken = (token) => {
  localStorage.setItem('access_token', JSON.stringify(token));
};

export const removeAccessToken = () => {
  localStorage.removeItem('access_token');
};

export const getRefreshToken = () => {
  const token = localStorage.getItem('refresh_token');
  if (token) {
    return JSON.parse(token);
  }
  return false;
};

export const setRefreshToken = (token) => {
  localStorage.setItem('refresh_token', JSON.stringify(token));
};

export const removeRefreshToken = () => {
  localStorage.removeItem('refresh_token');
};

export const removeTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};
