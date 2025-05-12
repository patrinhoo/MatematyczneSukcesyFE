import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoggedLayout } from './layout/LoggedLayout';
import { LoginPage } from './routes/auth/LoginPage';
import { NotFound404Page } from './routes/NotFound404Page';

import { UserProvider } from './contexts/user/UserContext';

import 'antd/dist/reset.css';
import './App.css';

const App = () => {
  return (
    <div className='App tw-bg-gray-light'>
      <UserProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/404' element={<NotFound404Page />} />
            <Route path='*' element={<LoggedLayout />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
