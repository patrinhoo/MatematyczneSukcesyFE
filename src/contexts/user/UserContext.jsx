import { createContext, useState, useCallback, useEffect } from 'react';
import { userService } from '../../api/services/userService';
import { authService } from '../../api/services/authService';
import { removeTokens } from '../../api/utils/tokens';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const tryRefreshToken = async () => {
    try {
      await authService.refreshToken();
      await fetchUser();
    } catch {
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

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, logout, refresh: fetchUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
