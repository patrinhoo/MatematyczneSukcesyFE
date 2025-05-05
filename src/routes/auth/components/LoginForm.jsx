import React, { useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message, Row, Col } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { authService } from '../../../api/services/authService';

export const LoginForm = ({ setIsLoading }) => {
  const navigate = useNavigate();

  const loginHandler = useCallback(
    async (values) => {
      setIsLoading(true);

      try {
        await authService.login(
          { email: values.email, password: values.password },
          values.remember
        );

        message.success('Zalogowano!');
        navigate('/dashboard');
      } catch (err) {
        console.error(err);
        message.error('Nie udało się zalogować!');
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, setIsLoading]
  );

  return (
    <Form
      name='login'
      className='login-form tw-mx-auto tw-text-center'
      style={{ width: 300 }}
      initialValues={{ remember: true }}
      onFinish={loginHandler}
    >
      <Form.Item
        name='email'
        rules={[
          {
            required: true,
            message: 'Proszę podać email!',
          },
          {
            type: 'email',
            message: 'Proszę podać email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Email' />
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
        <Input.Password prefix={<LockOutlined />} placeholder='Hasło' />
      </Form.Item>
      <Row className='tw-mb-6'>
        <Col xs={12}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox className='tw-font-semibold'>Zapamiętaj mnie</Checkbox>
          </Form.Item>
        </Col>

        <Col xs={12}>
          <Link
            className='tw-float-right tw-text-blue-medium tw-font-semibold'
            to={'/forgot-password'}
          >
            Zapomniałeś hasła?
          </Link>
        </Col>
      </Row>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: 120 }}>
          Zaloguj
        </Button>
      </Form.Item>
    </Form>
  );
};
