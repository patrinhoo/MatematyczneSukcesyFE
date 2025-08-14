import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  AppstoreOutlined,
  BarsOutlined,
  AppstoreAddOutlined,
  ReadOutlined,
  SignatureOutlined,
  AlertOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { useUser } from '../../contexts/user/useUser';
import classNames from 'classnames';

const { Sider } = Layout;

const MENU_COLLAPSED_WIDTH = 50;

export const LoggedMenu = ({ collapsed, setCollapsed }) => {
  const { user } = useUser();

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
          <Image
            src={user?.avatar}
            preview={false}
            height={collapsed ? 40 : 120}
            width={collapsed ? 40 : 120}
            className={classNames(
              'tw-border-green-light tw-border-solid tw-rounded-full',
              { 'tw-border-2': collapsed, 'tw-border-4': !collapsed }
            )}
          />
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
            key: '2',
            icon: <AppstoreOutlined />,
            label: 'Kursy',
            children: [
              {
                key: '21',
                label: <Link to={'/courses'}>Wszystkie</Link>,
                icon: <BarsOutlined />,
              },
              {
                key: '22',
                label: <Link to={'/myCourses'}>Moje</Link>,
                icon: <AppstoreAddOutlined />,
              },
            ],
          },
          {
            key: '3',
            icon: <ReadOutlined />,
            label: 'Zadania',
            children: [
              {
                key: '31',
                label: <Link to={'/tasks'}>Wszystkie</Link>,
                icon: <BarsOutlined />,
              },
            ],
          },
          {
            key: '4',
            icon: <SignatureOutlined />,
            label: 'Zadania domowe',
            children: [
              {
                key: '41',
                label: <Link to={'/homeworks'}>Wszytkie</Link>,
                icon: <BarsOutlined />,
              },
              {
                key: '42',
                label: <Link to={'/homeworks?status=READY'}>Do zrobienia</Link>,
                icon: <AlertOutlined />,
              },
              {
                key: '43',
                label: (
                  <Link to={'/homeworks?status=SUBMITTED'}>
                    Oczekujące na ocenę
                  </Link>
                ),
                icon: <SyncOutlined />,
              },
              {
                key: '44',
                label: <Link to={'/homeworks?status=CHECKED'}>Ocenione</Link>,
                icon: <CheckCircleOutlined />,
              },
            ],
          },
        ]}
      />
    </Sider>
  );
};
