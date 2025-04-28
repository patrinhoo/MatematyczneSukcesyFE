import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Tabs,
  Typography,
  message,
  Layout,
  Row,
  Col,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { authService } from '../../api/authService';
import { Logo } from '../../common/icons/Logo';
import { LogoWName } from '../../common/icons/LogoWName';

const { TabPane } = Tabs;
const { Text } = Typography;
const { Content, Footer } = Layout;

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const loginHandler = useCallback(
    (values) => {
      authService
        .login({ email: values.email, password: values.password })
        .then(() => {
          message.success('Zalogowano!');
          navigate('/dashboard');
        })
        .catch((err) => {
          console.log(err);
          message.error('Nie udało się zalogować!');
        });
    },
    [navigate]
  );

  return (
    <Layout style={{ minHeight: '100vh', padding: 10 }}>
      <LogoWName width={210} height={48} />
      <Content className='tw-mx-auto tw-flex tw-items-center'>
        <div>
          <Tabs defaultActiveKey='1' centered>
            <TabPane tab='Logowanie' key='1'>
              <Form
                name='normal_login'
                className='login-form tw-mx-auto'
                style={{ width: 300 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name='username'
                  rules={[
                    {
                      required: true,
                      message: 'Proszę podać nazwę użytkownika!',
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder='Nazwa użytkownika'
                  />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[
                    {
                      required: true,
                      message: 'Proszę podać hasło!',
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder='Hasło'
                  />
                </Form.Item>
                <Row className='tw-mb-6'>
                  <Col xs={12}>
                    <Form.Item name='remember' valuePropName='checked' noStyle>
                      <Checkbox className='tw-font-semibold'>
                        Zapamiętaj mnie
                      </Checkbox>
                    </Form.Item>
                  </Col>

                  <Col xs={12}>
                    <a
                      className='tw-float-right tw-text-blue-medium tw-font-semibold'
                      href=''
                    >
                      Zapomniałeś hasła?
                    </a>
                  </Col>
                </Row>

                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: 120 }}
                  >
                    Zaloguj
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            <TabPane tab='Rejestracja' key='2'>
              <p className='text-center'>Sign up form goes here.</p>
            </TabPane>
          </Tabs>
        </div>
      </Content>

      <Footer>
        <Text type='secondary'>Copyright ©2025 Created by Rybacki</Text>
      </Footer>
    </Layout>
  );
};
