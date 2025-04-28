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

export const MyCoursesListPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className='tw-p-4'>
      <Card
        className='App-courses-header-card tw-text-left'
        style={{ paddingBottom: 0 }}
      >
        <Title level={3}>Moje kursy</Title>

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
