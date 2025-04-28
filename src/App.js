import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LoggedLayout } from './layout/LoggedLayout';
import { LoginPage } from './routes/auth/LoginPage';
import { RegisterPage } from './routes/auth/RegisterPage';
import { NotFound404Page } from './routes/NotFound404Page';

import SettingsContextProvider from './store/Provider';

import './App.css';

const App = () => {
  return (
    <div className='App tw-bg-gray-light'>
      <SettingsContextProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/404' element={<NotFound404Page />} />
            <Route path='*' element={<LoggedLayout />} />
          </Routes>
        </Router>
      </SettingsContextProvider>
    </div>
  );
};

export default App;
