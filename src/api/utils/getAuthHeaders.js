import { getAccessToken } from './tokens';

export const getAuthHeaders = () => {
  const token = getAccessToken();

  if (!token) {
    return {};
  }

  return {
    headers: { Authorization: `Bearer ${token}` },
  };
};
