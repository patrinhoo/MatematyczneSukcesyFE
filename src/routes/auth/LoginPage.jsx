import React, { useState } from 'react';
import { Tabs, Typography, Layout, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { LogoWName } from '../../common/icons/LogoWName';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';

const { TabPane } = Tabs;
const { Text } = Typography;
const { Content, Footer } = Layout;

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeKey, setActiveKey] = useState('1');

  return (
    <Layout style={{ minHeight: '100vh', padding: 10 }}>
      {isLoading && (
        <Spin indicator={<LoadingOutlined spin />} size='large' fullscreen />
      )}
      <LogoWName width={210} height={48} />
      <Content className='tw-mx-auto tw-flex tw-items-center'>
        <div>
          <Tabs
            defaultActiveKey='1'
            activeKey={activeKey}
            onChange={(activeKey) => setActiveKey(activeKey)}
            centered
          >
            <TabPane tab='Logowanie' key={'1'}>
              <LoginForm setIsLoading={setIsLoading} />
            </TabPane>

            <TabPane tab='Rejestracja' key={'2'}>
              <RegisterForm
                setIsLoading={setIsLoading}
                setActiveKey={setActiveKey}
              />
            </TabPane>
          </Tabs>
        </div>
      </Content>

      <Footer className='tw-text-center'>
        <Text type='secondary'>Copyright ©2025 Created by Rybacki</Text>
      </Footer>
    </Layout>
  );
};
