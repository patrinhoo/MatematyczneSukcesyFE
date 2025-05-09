import React, { useCallback } from 'react';
import { Form, Input, Button, Checkbox, message, Row, Col, Select } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { authService } from '../../../api/services/authService';
import { userRolesMap } from '../../../utils/userRoles';
import { userGenderMap } from '../../../utils/userGender';

export const RegisterForm = ({ setIsLoading, setActiveKey }) => {
  const registerHandler = useCallback(
    async (values) => {
      setIsLoading(true);

      try {
        await authService.register({ ...values });
        message.success('Pomyślnie utworzono użytkownika!');
        setActiveKey('1');
      } catch (err) {
        console.error(err);
        message.error('Podczas rejestracji wystąpił błąd!');
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setActiveKey]
  );

  return (
    <Form
      name='register'
      className='login-form tw-mx-auto tw-text-center'
      style={{ width: 300 }}
      onFinish={registerHandler}
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
      <Form.Item
        name='password2'
        rules={[
          {
            required: true,
            message: 'Powtórz hasło!',
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder='Powtórz hasło' />
      </Form.Item>

      <Form.Item
        name='given_name'
        rules={[
          {
            required: true,
            message: 'Proszę podać imię!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Imię' />
      </Form.Item>
      <Form.Item
        name='last_name'
        rules={[
          {
            required: true,
            message: 'Proszę podać nazwisko!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder='Nazwisko' />
      </Form.Item>
      <Form.Item
        name='role'
        rules={[
          {
            required: true,
            message: 'Proszę podać imię!',
          },
        ]}
      >
        <Select
          prefix={<UserOutlined />}
          placeholder='Rola'
          options={Object.values(userRolesMap)}
          className='tw-text-left'
        />
      </Form.Item>
      <Form.Item
        name='gender'
        rules={[
          {
            required: true,
            message: 'Proszę podać płeć!',
          },
        ]}
      >
        <Select
          prefix={<UserOutlined />}
          placeholder='Płeć'
          options={Object.values(userGenderMap)}
          className='tw-text-left'
        />
      </Form.Item>

      <Row className='tw-mb-6 '>
        <Col xs={24}>
          <Form.Item
            name='terms_confirmed'
            valuePropName='checked'
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error('Musisz zaakceptować zasady!')),
              },
            ]}
          >
            <Checkbox className='tw-font-semibold'>Akceptuje zasady</Checkbox>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: 120 }}>
          Zarejestruj
        </Button>
      </Form.Item>
    </Form>
  );
};
