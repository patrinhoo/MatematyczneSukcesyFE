import React, { useState, useEffect, useCallback } from 'react';

import {
  Spin,
  Card,
  Row,
  Col,
  Typography,
  Form,
  Button,
  Select,
  message,
} from 'antd';
import {
  AimOutlined,
  LoadingOutlined,
  ClusterOutlined,
  BranchesOutlined,
} from '@ant-design/icons';

import { categoriesService } from '../../api/services/categoriesService';
import { tasksService } from '../../api/services/tasksService';
import { educationLevelsMap } from '../../utils/educationLevels';
import { taskTypesMap } from '../../utils/taskTypes';

import './css/tasks.css';

const { Title } = Typography;

export const TasksListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [params, setParams] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoriesService.getList();
        setCategories(
          data.map((category) => ({
            label: category.name,
            value: category.id,
          }))
        );
      } catch (err) {
        console.error(err);
        message.error('Podczas pobierania kategorii wystąpił błąd!');
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await tasksService.getList(params);
        setTasks(data);
      } catch (err) {
        console.error(err);
        message.error('Podczas pobierania zadań wystąpił błąd!');
      } finally {
        setLoadingTasks(false);
      }
    };

    fetchTasks();
  }, [params]);

  const onFinish = useCallback(
    (values) => {
      setParams(
        Object.fromEntries(Object.entries(values).filter(([_, v]) => v))
      );
    },
    [setParams]
  );

  return (
    <div className='tw-p-4'>
      <Card
        className='App-tasks-header-card tw-text-left'
        style={{ paddingBottom: 0 }}
      >
        <Title level={3}>Zadania</Title>
      </Card>

      {loadingCategories ? (
        <div className='tw-text-center tw-pt-32'>
          <Spin indicator={<LoadingOutlined spin />} size='large' />
        </div>
      ) : (
        <Row className='tw-p-8' gutter={[20, 20]}>
          <Col xs={24}>
            <Card className='App-tasks-filter-card tw-text-left'>
              <Form layout='vertical' onFinish={onFinish}>
                <Row gutter={[20, 10]}>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={4}
                    className='tw-text-gray-dark tw-font-bold tw-mb-2'
                  >
                    <div className='tw-mb-2'>Poziom:</div>
                    <Form.Item name='education_level'>
                      <Select
                        prefix={<AimOutlined />}
                        placeholder='Poziom'
                        options={Object.values(educationLevelsMap)}
                        className='tw-text-left'
                        allowClear
                      />
                    </Form.Item>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={4}
                    className='tw-text-gray-dark tw-font-bold tw-mb-2'
                  >
                    <div className='tw-mb-2'>Kategoria:</div>
                    <Form.Item name='category'>
                      <Select
                        prefix={<ClusterOutlined />}
                        placeholder='Kategoria'
                        options={Object.values(categories)}
                        className='tw-text-left'
                        allowClear
                      />
                    </Form.Item>
                  </Col>
                  <Col
                    xs={24}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={4}
                    className='tw-text-gray-dark tw-font-bold tw-mb-2'
                  >
                    <div className='tw-mb-2'>Typ zadania:</div>
                    <Form.Item name='type'>
                      <Select
                        prefix={<BranchesOutlined />}
                        placeholder='Typ zadania'
                        options={Object.values(taskTypesMap)}
                        className='tw-text-left'
                        allowClear
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} className='tw-text-center'>
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
        </Row>
      )}
    </div>
  );
};
