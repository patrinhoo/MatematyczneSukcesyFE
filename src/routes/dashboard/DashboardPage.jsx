import React from 'react';
import { Row, Col } from 'antd';

import { HeaderBox } from './components/HeaderBox';
import { CoursesBox } from './components/CoursesBox';
import { ActivityBox } from './components/ActivityBox';
import { QuickStartBox } from './components/QuickStartBox';
import { TasksBox } from './components/TasksBox';

export const DashboardPage = () => {
  return (
    <div className='tw-p-4'>
      <HeaderBox />
      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24} md={16}>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <CoursesBox />
            </Col>
            <Col xs={24}>
              <ActivityBox />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <QuickStartBox />
            </Col>
            <Col xs={24}>
              <TasksBox />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
