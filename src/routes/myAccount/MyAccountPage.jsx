import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Spin,
  Card,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Radio,
  Button,
} from 'antd';

export const MyAccountPage = () => {
  return (
    <div className='tw-p-4'>
      {/* <Spin indicator={<LoadingOutlined spin />} size='large' fullscreen /> */}
      <Card className='tw-text-left'>
        <div className='tw-text-2xl tw-font-semibold tw-mb-6'>Ustawienia</div>
        <div className='tw-flex tw-gap-2'>
          Tutaj zaktualizujesz podstawowe informacje, takie jak: imię, nazwisko,
          data urodzenia, adres zamieszkania, itd.
        </div>
      </Card>

      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24}>
          <Card>
            <Form
              // form={form}
              name='create'
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              labelCol={{ xs: 24, lg: 4 }}
              wrapperCol={{ xs: 24, lg: 16 }}
            >
              <Form.Item name='given_name' label='Imię'>
                <Input placeholder='Podaj imię' />
              </Form.Item>
              <Form.Item name='family_name' label='Nazwisko'>
                <Input placeholder='Podaj nazwisko' />
              </Form.Item>
              <Form.Item name='birth_date' label='Data urodzenia'>
                <DatePicker placeholder='Podaj datę urodzenia' />
              </Form.Item>

              <Form.Item name='sex' label='Płeć'>
                <Radio.Group
                  options={[
                    { value: 'male', label: 'Mężczyzna' },
                    { value: 'female', label: 'Kobieta' },
                    { value: 'other', label: 'Inna' },
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
                      // size='large'
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
                  <Button
                  // type='danger'
                  // size='large'
                  // onClick={handleCancel}
                  >
                    Anuluj
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
