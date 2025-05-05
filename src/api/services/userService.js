import axios from 'axios';
import { getAuthHeaders } from '../utils/getAuthHeaders';

export const userService = {};

userService.getUserData = async () => {
  const { headers } = getAuthHeaders();
  const url = '/api/auth/me';

  try {
    const response = await axios({
      url,
      headers,
    });

    if (response?.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
