import axios from 'axios';
import { getAuthHeaders } from '../utils/getAuthHeaders';

export const homeworksService = {};

homeworksService.getList = async (params = {}) => {
  const { headers } = getAuthHeaders();
  const url = '/api/homeworks/';

  try {
    const response = await axios(url, { headers, params });

    if (response?.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
