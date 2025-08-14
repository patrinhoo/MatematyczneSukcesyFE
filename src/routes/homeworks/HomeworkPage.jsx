import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import {
  Card,
  Row,
  Col,
  Typography,
  Spin,
  message,
  Tooltip,
  Avatar,
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

import { HomeworkTask } from './components/HomeworkTask';
import { homeworksService } from '../../api/services/homeworksService';

import './css/homeworks.css';

const { Title } = Typography;

export const HomeworkPage = () => {
  const { homeworkId } = useParams();

  const [homework, setHomework] = useState();
  const [loadingHomework, setLoadingHomework] = useState(true);

  useEffect(() => {
    const fetchHomework = async () => {
      try {
        setLoadingHomework(true);
        const data = await homeworksService.getOne(homeworkId);
        setHomework(data);
      } catch (err) {
        console.error(err);
        message.error('Podczas pobierania zadań domowych wystąpił błąd!');
      } finally {
        setLoadingHomework(false);
      }
    };

    fetchHomework();
  }, [homeworkId, setLoadingHomework]);

  // const onFinish = useCallback(
  //   (values) => {
  //     const formattedValues = Object.fromEntries(
  //       Object.entries({
  //         ...params,
  //         ...values,
  //       })
  //         .filter(([_, v]) => v)
  //         .map(([key, value]) => {
  //           if (dayjs.isDayjs(value)) {
  //             return [key, value.toISOString()];
  //           }
  //           return [key, value];
  //         })
  //     );

  //     setParams(formattedValues);
  //   },
  //   [params, setParams]
  // );

  return (
    <div className='tw-p-4'>
      {loadingHomework ? (
        <div className='tw-text-center tw-pt-32'>
          <Spin indicator={<LoadingOutlined spin />} size='large' />
        </div>
      ) : (
        <>
          <Card className='tw-text-left'>
            <div className='tw-flex'>
              <Title level={3} className='tw-mr-auto'>
                Zadanie domowe z dnia:{' '}
                {dayjs(homework.ready_at)?.format('YYYY-MM-DD')}
              </Title>
              <Tooltip
                title={[
                  'Zadane przez:',
                  homework.assigned_by.given_name,
                  homework.assigned_by.last_name,
                ].join(' ')}
                placement='left'
              >
                <Avatar src={homework.assigned_by.avatar} />
              </Tooltip>
            </div>
          </Card>

          <Row className='tw-p-8' gutter={[20, 20]}>
            <Col xs={24}>
              {homework.homework_tasks.map((homeworkTask) => (
                <HomeworkTask
                  key={homeworkTask.id}
                  homeworkTask={homeworkTask}
                />
              ))}
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};
