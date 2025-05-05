import axios from 'axios';

import {
  setAccessToken,
  setRefreshToken,
  getRefreshToken,
} from '../utils/tokens';

export const authService = {};

authService.login = async (data, remember) => {
  const url = '/api/auth/token/';

  try {
    const response = await axios.post(url, data);

    if (remember) {
      setAccessToken(response.data.access);
      setRefreshToken(response.data.refresh);
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

authService.register = async (data) => {
  const url = '/api/auth/register/';

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

authService.refreshToken = async () => {
  const url = '/api/auth/token/refresh/';

  try {
    const refresh = getRefreshToken();
    if (!refresh) throw new Error('No refresh token found!');

    const response = await axios.post(url, { refresh });
    setAccessToken(response.data.access);

    return response.data;
  } catch (error) {
    throw error;
  }
};
