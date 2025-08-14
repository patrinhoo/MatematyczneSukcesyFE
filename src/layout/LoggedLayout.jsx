import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';

import { LoggedMenu } from './logged/LoggedMenu';
import { LoggedHeader } from './logged/LoggedHeader';
import { PrivateRoute } from '../common/components/PrivateRoute';

// Dashboard
import { DashboardPage } from '../routes/dashboard/DashboardPage';

// Account
import { MyAccountPage } from '../routes/myAccount/MyAccountPage';

// Courses
import { CoursesListPage } from '../routes/courses/CoursesListPage';
import { MyCoursesListPage } from '../routes/courses/MyCoursesListPage';

// Tasks
import { TasksListPage } from '../routes/tasks/TasksListPage';

// Homeworks
import { HomeworkPage } from '../routes/homeworks/HomeworkPage';
import { HomeworksListPage } from '../routes/homeworks/HomeworksListPage';

import { LoggedFooter } from './logged/LoggedFooter';

const { Content } = Layout;

export const LoggedLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LoggedHeader collapsed={collapsed} />
      <Layout>
        <LoggedMenu collapsed={collapsed} setCollapsed={setCollapsed} />

        <Layout>
          <Content>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path='/dashboard' element={<DashboardPage />} />

                <Route path='/myAccount' element={<MyAccountPage />} />

                <Route path='/courses' element={<CoursesListPage />} />
                <Route path='/myCourses' element={<MyCoursesListPage />} />

                <Route path='/tasks' element={<TasksListPage />} />

                <Route
                  path='/homeworks/:homeworkId'
                  element={<HomeworkPage />}
                />
                <Route path='/homeworks' element={<HomeworksListPage />} />

                <Route
                  exact
                  path='/'
                  element={<Navigate to={'/dashboard'} replace />}
                />
                <Route
                  exact
                  path='*'
                  element={<Navigate to={'/404'} replace />}
                />
              </Route>
            </Routes>
          </Content>

          <LoggedFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};
