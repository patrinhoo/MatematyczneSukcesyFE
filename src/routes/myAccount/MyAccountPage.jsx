import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  Form,
  Input,
  Radio,
  Button,
  Upload,
  message,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { useUser } from '../../contexts/user/useUser';
import { userService } from '../../api/services/userService';

export const MyAccountPage = () => {
  const navigate = useNavigate();
  const [imageFile, setImageFile] = useState(null);
  const [form] = Form.useForm();
  const { user, setUser } = useUser();

  useEffect(() => {
    form.setFieldsValue(user);
  }, [user, form]);

  const handleImageChange = (info) => {
    const isJpgOrPng =
      info.file.type === 'image/jpeg' || info.file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Proszę wybrać plik JPG lub PNG!');
      return;
    }
    const isLt2M = info.file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
      return;
    }

    setImageFile(info.file);
  };

  const onFinish = useCallback(
    async (values) => {
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      if (imageFile instanceof File) {
        formData.append('avatar', imageFile);
      }

      try {
        const userData = await userService.updateUserData(formData);
        setUser(userData);
        message.success('Pomyślnie zaktualizowano profil użytkownika!');
        navigate('/');
      } catch (err) {
        console.log(err);
        message.error('Wystąpił błąd!');
      }
    },
    [imageFile, setUser, navigate]
  );

  const handleCancel = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type='button'>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className='tw-p-4'>
      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24} className='tw-text-center'>
          <Card className='tw-text-left'>
            <div className='tw-text-2xl tw-font-semibold tw-mb-6'>
              Ustawienia
            </div>
            <div className='tw-flex tw-gap-2'>
              Tutaj zaktualizujesz podstawowe informacje, takie jak: imię,
              nazwisko, data urodzenia, adres zamieszkania, itd.
            </div>
          </Card>
        </Col>

        <Col xs={24}>
          <Card>
            <Upload
              name='avatar'
              accept='image/png,image/jpeg'
              listType='picture-circle'
              showUploadList={false}
              beforeUpload={() => false}
              onChange={handleImageChange}
              className='upload-profile-image tw-my-6 tw-flex tw-items-center tw-justify-center tw-flex'
              maxCount={1}
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt='shoe model'
                  className='tw-rounded-full'
                  style={{ width: 200, height: 200 }}
                />
              ) : user?.avatar ? (
                <img
                  src={user.avatar}
                  alt='shoe model'
                  className='tw-rounded-full'
                  style={{ width: 200, height: 200 }}
                />
              ) : (
                uploadButton
              )}
            </Upload>

            <Form
              name='create'
              onFinish={onFinish}
              labelCol={{ xs: 24, lg: 4 }}
              wrapperCol={{ xs: 24, lg: 16 }}
              form={form}
            >
              <Form.Item name='given_name' label='Imię'>
                <Input placeholder='Podaj imię' />
              </Form.Item>
              <Form.Item name='last_name' label='Nazwisko'>
                <Input placeholder='Podaj nazwisko' />
              </Form.Item>

              <Form.Item name='gender' label='Płeć'>
                <Radio.Group
                  options={[
                    { value: 'MALE', label: 'Mężczyzna' },
                    { value: 'FEMALE', label: 'Kobieta' },
                  ]}
                />
              </Form.Item>

              <Row>
                <Col
                  xs={12}
                  lg={{ offset: 4, span: 8 }}
                  className='tw-text-left'
                >
                  <Form.Item>
                    <Button
                      className='ant-btn-green'
                      type='primary'
                      htmlType='submit'
                    >
                      Zapisz
                    </Button>
                  </Form.Item>
                </Col>
                <Col
                  xs={12}
                  lg={8}
                  className='tw-text-right'
                  style={{ height: 40 }}
                >
                  <Button onClick={handleCancel}>Anuluj</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
