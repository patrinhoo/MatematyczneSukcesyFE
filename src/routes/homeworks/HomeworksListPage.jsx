import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Card,
  Row,
  Col,
  Tabs,
  Typography,
  DatePicker,
  Form,
  Button,
  message,
  Spin,
  Empty,
  Pagination,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { HomeworksListItem } from './components/HomeworksListItem';
import { homeworksService } from '../../api/services/homeworksService';

import './css/homeworks.css';

const { TabPane } = Tabs;
const { Title } = Typography;

export const HomeworksListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryStatus = searchParams.get('status');
  const [activeTab, setActiveTab] = useState();
  const [homeworks, setHomeworks] = useState([]);
  const [loadingHomeworks, setLoadingHomeworks] = useState(true);
  const [pagination, setPagination] = useState({});
  const [params, setParams] = useState({ page: 1, page_size: 10 });

  useEffect(() => {
    if (queryStatus) {
      setActiveTab(queryStatus);
      setParams((curr) => ({ ...curr, status: queryStatus }));
    } else {
      setActiveTab(undefined);
      setParams((curr) => ({ ...curr, status: undefined }));
    }
  }, [queryStatus]);

  useEffect(() => {
    const fetchHomeworks = async () => {
      try {
        setLoadingHomeworks(true);
        const data = await homeworksService.getList(params);
        const { results: tasks, current_page: page, ...pagination } = data;
        setHomeworks(tasks);
        setPagination({ ...pagination, page });
      } catch (err) {
        console.error(err);
        message.error('Podczas pobierania zadań domowych wystąpił błąd!');
      } finally {
        setLoadingHomeworks(false);
      }
    };

    fetchHomeworks();
  }, [params]);

  const onFinish = useCallback(
    (values) => {
      const formattedValues = Object.fromEntries(
        Object.entries({
          ...params,
          ...values,
        })
          .filter(([_, v]) => v)
          .map(([key, value]) => {
            if (dayjs.isDayjs(value)) {
              return [key, value.toISOString()];
            }
            return [key, value];
          })
      );

      setParams(formattedValues);
    },
    [params, setParams]
  );

  return (
    <div className='tw-p-4'>
      <Card
        className='App-homeworks-header-card tw-text-left'
        style={{ paddingBottom: 0 }}
      >
        <Title level={3}>Zadania domowe</Title>

        <Tabs
          activeKey={activeTab}
          onChange={(key) =>
            key ? navigate(`/homeworks?status=${key}`) : navigate(`/homeworks`)
          }
          className='App-homeworks-tab-nav'
        >
          <TabPane tab='Wszystkie' key='' />
          <TabPane tab='Do zrobienia' key='READY' />
          <TabPane tab='Oczekujące na ocenę' key='SUBMITTED' />
          <TabPane tab='Ocenione' key='CHECKED' />
        </Tabs>
      </Card>

      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24}>
          <Card className='App-homeworks-filter-card tw-text-left'>
            <Form layout='vertical' onFinish={onFinish}>
              <Row gutter={[20, 10]}>
                <Col xs={24} lg={12} xl={8}>
                  <Row>
                    <Col
                      xs={24}
                      className='tw-text-gray-dark tw-font-bold tw-mb-2'
                    >
                      Utworzono:
                    </Col>
                    <Col xs={11}>
                      <Form.Item name='created_from'>
                        <DatePicker
                          placeholder='Utworzono od'
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={2} className='tw-text-center tw-text-bold'>
                      -
                    </Col>
                    <Col xs={11}>
                      <Form.Item name='created_to'>
                        <DatePicker
                          placeholder='Utworzono do'
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                {['SUBMITTED', 'CHECKED'].includes(activeTab) && (
                  <Col xs={24} lg={12} xl={8}>
                    <Row>
                      <Col
                        xs={24}
                        className='tw-text-gray-dark tw-font-bold tw-mb-2'
                      >
                        Oddano do sprawdzenia:
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='submitted_from'>
                          <DatePicker
                            placeholder='Oddano od'
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={2} className='tw-text-center tw-text-bold'>
                        -
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='submitted_to'>
                          <DatePicker
                            placeholder='Oddano do'
                            style={{ width: '100%' }}
                            showTime
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                )}

                {activeTab === 'CHECKED' && (
                  <Col xs={24} lg={12} xl={8}>
                    <Row>
                      <Col
                        xs={24}
                        className='tw-text-gray-dark tw-font-bold tw-mb-2'
                      >
                        Oceniono:
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='checked_from'>
                          <DatePicker
                            placeholder='Oceniono od'
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={2} className='tw-text-center tw-text-bold'>
                        -
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='checked_to'>
                          <DatePicker
                            placeholder='Oceniono do'
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                )}

                <Col xs={24} className='tw-mt-4 tw-text-center'>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ width: 150 }}
                  >
                    Szukaj
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>

        {loadingHomeworks ? (
          <div className='tw-text-center tw-pt-32'>
            <Spin indicator={<LoadingOutlined spin />} size='large' />
          </div>
        ) : (
          <Col xs={24}>
            {homeworks.length > 0 ? (
              <>
                {homeworks.map((homework) => (
                  <HomeworksListItem homework={homework} />
                ))}
                <div className='tw-mt-4'>
                  <Pagination
                    total={pagination.count}
                    current={pagination.page}
                    pageSize={pagination.page_size}
                    showSizeChanger={{
                      options: [
                        { label: '5', value: 5 },
                        { label: '10', value: 10 },
                        { label: '25', value: 25 },
                      ],
                      showSearch: false,
                    }}
                    align={'end'}
                    onChange={(page, pageSize) =>
                      setParams((curr) => {
                        console.log(curr);
                        return {
                          ...curr,
                          page,
                          page_size: pageSize,
                        };
                      })
                    }
                  />
                </div>
              </>
            ) : (
              <Empty description={'Brak zadań domowych'} className='tw-mt-12' />
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};
