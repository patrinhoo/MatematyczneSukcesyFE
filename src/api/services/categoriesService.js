import axios from 'axios';
import { getAuthHeaders } from '../utils/getAuthHeaders';

export const categoriesService = {};

categoriesService.getList = async () => {
  const { headers } = getAuthHeaders();
  const url = '/api/categories/';

  try {
    const response = await axios(url, { headers });

    if (response?.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};
