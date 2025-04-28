import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  BarsOutlined,
  AppstoreAddOutlined,
  SignatureOutlined,
  AlertOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { User } from '../../common/icons/User';

const { Sider } = Layout;

const MENU_COLLAPSED_WIDTH = 50;

export const LoggedMenu = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      breakpoint='md'
      collapsedWidth={MENU_COLLAPSED_WIDTH}
      onCollapse={(value) => setCollapsed(value)}
      collapsible
      theme='light'
      className='tw-text-center'
    >
      <div className='tw-py-8 tw-mx-auto tw-w-fit'>
        <Link to={'/myAccount'}>
          <User height={collapsed ? 40 : 80} width={collapsed ? 40 : 80} />
        </Link>
      </div>
      <Menu
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={[
          {
            key: '1',
            icon: <DashboardOutlined />,
            label: <Link to={'/dashboard'}>Strona główna</Link>,
          },
          {
            key: '12',
            icon: <AppstoreOutlined />,
            label: 'Kursy',
            children: [
              {
                key: '17',
                label: <Link to={'/courses'}>Wszystkie</Link>,
                icon: <BarsOutlined />,
              },
              {
                key: '15',
                label: <Link to={'/myCourses'}>Moje</Link>,
                icon: <AppstoreAddOutlined />,
              },
            ],
          },
          {
            key: '2',
            icon: <SignatureOutlined />,
            label: 'Zadania domowe',
            children: [
              {
                key: '7',
                label: <Link to={'/homeworks?status=TO_DO'}>Do zrobienia</Link>,
                icon: <AlertOutlined />,
              },
              {
                key: '6',
                label: (
                  <Link to={'/homeworks?status=WAITING'}>
                    Oczekujące na ocenę
                  </Link>
                ),
                icon: <SyncOutlined />,
              },
              {
                key: '5',
                label: <Link to={'/homeworks?status=GRADED'}>Ocenione</Link>,
                icon: <CheckCircleOutlined />,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};
