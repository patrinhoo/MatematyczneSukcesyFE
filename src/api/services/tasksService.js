import axios from 'axios';
import { getAuthHeaders } from '../utils/getAuthHeaders';

export const tasksService = {};

tasksService.getList = async (params = {}) => {
  const { headers } = getAuthHeaders();
  const url = '/api/tasks/tasks/';

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
