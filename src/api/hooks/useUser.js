import { useState, useEffect, useCallback } from 'react';

import { removeTokens } from '../utils/tokens';
import { userService } from '../services/userService';
import { authService } from '../services/authService';

export const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const tryRefreshToken = async () => {
    try {
      await authService.refreshToken();

      // Refetch user
      await fetchUser();
    } catch (err) {
      logout();
    }
  };

  const fetchUser = async () => {
    try {
      const userData = await userService.getUserData();
      setUser(userData);
    } catch (err) {
      if (err.response?.status === 401) {
        await tryRefreshToken();
      } else {
        console.error('Cannot get user data:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = useCallback(() => {
    removeTokens();
    setUser(null);
  }, []);

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line
  }, []);

  return { user, loading, logout };
};
