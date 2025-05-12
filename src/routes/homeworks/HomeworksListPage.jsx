import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Card,
  Row,
  Col,
  List,
  Avatar,
  Tabs,
  Typography,
  DatePicker,
  Form,
  Button,
} from 'antd';

import './css/homeworks.css';

const { TabPane } = Tabs;
const { Title } = Typography;

const mockData = [
  {
    title: 'Alipay',
    desc: 'Nibh fringilla ut morbi amet, fusce amet nulla ut tristique.',
    time: 'Just now',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'Angular',
    desc: 'Eleifend ultricies nam mauris non facilisis.',
    time: '2 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'Ant Design',
    desc: 'Etiam condimentum leo arcu posuere vitae, quis.',
    time: '4 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'Ant Design Pro',
    desc: 'Ac nulla hendrerit diam, scelerisque fusce lacus sed.',
    time: '6 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'React',
    desc: 'Etiam condimentum leo arcu posuere vitae, quis.',
    time: '10 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'React',
    desc: 'Etiam condimentum leo arcu posuere vitae, quis.',
    time: '10 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'React',
    desc: 'Etiam condimentum leo arcu posuere vitae, quis.',
    time: '10 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
  {
    title: 'React',
    desc: 'Etiam condimentum leo arcu posuere vitae, quis.',
    time: '10 hrs ago',
    image:
      'https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Marketing.original.format-jpeg.jpg',
  },
];

export const HomeworksListPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryStatus = searchParams.get('status');

  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState();

  useEffect(() => {
    if (queryStatus) {
      setActiveTab(queryStatus);
    } else {
      setActiveTab('TO_DO');
    }
  }, [queryStatus]);

  return (
    <div className='tw-p-4'>
      <Card
        className='App-homeworks-header-card tw-text-left'
        style={{ paddingBottom: 0 }}
      >
        <Title level={3}>Zadania domowe</Title>

        <Tabs
          activeKey={activeTab}
          onChange={(key) => navigate(`/homeworks?status=${key}`)}
          className='App-homeworks-tab-nav'
        >
          <TabPane tab='Do zrobienia' key='TO_DO' />
          <TabPane tab='Oczekujące na ocenę' key='WAITING' />
          <TabPane tab='Ocenione' key='GRADED' />
        </Tabs>
      </Card>

      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24}>
          <Card className='App-homeworks-filter-card tw-text-left'>
            <Form
              // form={form}
              layout='vertical'
              // onFinish={onFinish}
            >
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
                      <Form.Item name='createdFrom'>
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
                      <Form.Item name='createdTo'>
                        <DatePicker
                          placeholder='Oceniono do'
                          style={{ width: '100%' }}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>

                {['WAITING', 'GRADED'].includes(activeTab) && (
                  <Col xs={24} lg={12} xl={8}>
                    <Row>
                      <Col
                        xs={24}
                        className='tw-text-gray-dark tw-font-bold tw-mb-2'
                      >
                        Oddano do sprawdzenia:
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='submittedFrom'>
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
                        <Form.Item name='submittedTo'>
                          <DatePicker
                            placeholder='Oddano do'
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                )}

                {activeTab === 'GRADED' && (
                  <Col xs={24} lg={12} xl={8}>
                    <Row>
                      <Col
                        xs={24}
                        className='tw-text-gray-dark tw-font-bold tw-mb-2'
                      >
                        Oceniono:
                      </Col>
                      <Col xs={11}>
                        <Form.Item name='gradedFrom'>
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
                        <Form.Item name='gradedTo'>
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

        <Col xs={24}>
          <List
            grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, column: 5 }}
            dataSource={mockData.filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  cover={<img alt={item.title} src={item.image} />}
                >
                  <Card.Meta
                    title={item.title}
                    description={
                      <div>
                        <p>{item.desc}</p>
                        <p style={{ color: '#888' }}>{item.time}</p>
                        <Avatar.Group>
                          <Avatar src='https://i.pravatar.cc/40?img=1' />
                          <Avatar src='https://i.pravatar.cc/40?img=2' />
                          <Avatar src='https://i.pravatar.cc/40?img=3' />
                        </Avatar.Group>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};
