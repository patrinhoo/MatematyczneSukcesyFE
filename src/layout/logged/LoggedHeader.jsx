import React, { useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Dropdown, message, Layout } from 'antd';
import { LogoWName } from '../../common/icons/LogoWName';
import { useUser } from '../../api/hooks/useUser';

const { Header } = Layout;

export const LoggedHeader = () => {
  const navigate = useNavigate();
  const { logout } = useUser();

  const logoutHandler = useCallback(() => {
    logout();
    message.success('Wylogowano!');
    navigate('/login');
  }, [navigate, logout]);

  const items = useMemo(
    () => [
      {
        key: '1',
        label: <Link to='/myAccount'>Ustawienia</Link>,
        icon: <SettingOutlined />,
      },
      {
        key: '2',
        label: (
          <div className='tw-text-red-medium' onClick={logoutHandler}>
            Wyloguj
          </div>
        ),
        icon: <LogoutOutlined className='tw-text-red-medium' />,
      },
    ],
    [logoutHandler]
  );

  return (
    <Header style={{ height: 64, paddingLeft: 10 }} className='tw-py-3'>
      <div className='tw-flex'>
        <Link to={'/dashboard'}>
          <LogoWName height={48} width={210} textColor='#fff' />
        </Link>
        <div className='tw-flex-1 tw-text-right tw-text-white hover:tw-text-gray-light tw-text-2xl tw-pt-1'>
          <div>
            <Dropdown
              menu={{
                items,
              }}
              trigger={'click'}
              placement='bottomRight'
            >
              <UserOutlined />
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};
