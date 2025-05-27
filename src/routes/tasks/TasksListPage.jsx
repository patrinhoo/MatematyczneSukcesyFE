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
  Pagination,
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
import { TaskListItem } from './components/TaskListItem';

import './css/tasks.css';

const { Title } = Typography;

export const TasksListPage = () => {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const [pagination, setPagination] = useState({});
  const [params, setParams] = useState({ page: 1, page_size: 10 });

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
        setLoadingTasks(true);
        const data = await tasksService.getList(params);
        const { results: tasks, current_page: page, ...pagination } = data;
        setTasks(tasks);
        setPagination({ ...pagination, page });
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
        <div className='tw-p-8'>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <Card className='App-tasks-filter-card tw-text-left'>
                <Form layout='vertical' onFinish={onFinish}>
                  <Row gutter={[20, 0]}>
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
          {loadingTasks ? (
            <div className='tw-text-center tw-pt-32'>
              <Spin indicator={<LoadingOutlined spin />} size='large' />
            </div>
          ) : (
            <div className='tw-pt-8'>
              {tasks.map((task) => (
                <TaskListItem key={task.id} task={task} />
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};
