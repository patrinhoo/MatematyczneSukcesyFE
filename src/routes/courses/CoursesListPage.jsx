import React, { useState, useCallback, useContext, useEffect } from 'react';

import {
  Spin,
  Card,
  Row,
  Col,
  List,
  Avatar,
  Select,
  Input,
  Tabs,
  Typography,
  Tag,
} from 'antd';
import { StarFilled, UserOutlined } from '@ant-design/icons';

import './css/courses.css';
import 'antd/dist/reset.css';

const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = Select;
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

const categories = [
  'Funkcje',
  'Funkcja liniowa',
  'Funkcja kwadratowa',
  'Wielomiany',
  'Trygonometria',
  'Planimetria',
  'Ciągi',
  'Geometria analityczna',
  'Stereometria',
  'Kombinatoryka i prawdopodobieństwo',
];

export const CoursesListPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className='tw-p-4'>
      <Card
        className='App-courses-header-card tw-text-left'
        style={{ paddingBottom: 0 }}
      >
        <Title level={3}>Wszystkie kursy</Title>

        <Tabs
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key)}
          className='App-courses-tab-nav'
        >
          <TabPane tab='Wszystkie' key='1' />
          <TabPane tab='Podstawa' key='2' />
          <TabPane tab='Rozszerzenie' key='3' />
        </Tabs>
      </Card>

      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24}>
          <Card className='App-courses-filter-card tw-text-left'>
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
              <Col xs={24}>
                <Search
                  placeholder='Wyszukaj kurs'
                  enterButton
                  onSearch={(value) => setSearchValue(value)}
                  style={{ maxWidth: 400, margin: '20px 0' }}
                />
              </Col>
              <Col xs={24}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {categories.map((cat, idx) => (
                    <Tag key={idx}>{cat}</Tag>
                  ))}
                </div>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={4} className='tw-mt-4'>
                <Select
                  placeholder={
                    <>
                      <UserOutlined className='tw-mr-2' /> Autor
                    </>
                  }
                  size='small'
                  style={{ width: '100%' }}
                  allowClear
                >
                  <Option value={'id1'}>
                    <UserOutlined className='tw-mr-2' />
                    Patryk Rybacki
                  </Option>
                  <Option value={'id2'}>
                    <UserOutlined className='tw-mr-2' />
                    Andrzej Nowak
                  </Option>
                  <Option value={'id3'}>
                    <UserOutlined className='tw-mr-2' />
                    Piotr Kowalski
                  </Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={4} className='tw-mt-4'>
                <Select
                  placeholder='Ocena'
                  size='small'
                  style={{ width: '100%' }}
                  allowClear
                >
                  <Option value={1}>
                    <StarFilled className='tw-text-gold-medium' />
                  </Option>
                  <Option value={2}>
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                  </Option>
                  <Option value={3}>
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                  </Option>
                  <Option value={4}>
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                  </Option>
                  <Option value={5}>
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                    <StarFilled className='tw-text-gold-medium' />
                  </Option>
                </Select>
              </Col>
            </Row>
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
