import { Navigate, Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useUser } from '../../api/hooks/useUser';

export const PrivateRoute = () => {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <Spin indicator={<LoadingOutlined spin />} size='large' fullscreen />
    );
  }

  return user ? <Outlet /> : <Navigate to='/login' replace />;
};
