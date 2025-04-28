import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const LoggedFooter = () => {
  return (
    <Footer className='tw-text-center tw-bg-theme-dark'>
      <Text className='tw-text-gray-mediumDark tw-font-semibold'>
        Copyright ©2025 Created by Rybacki
      </Text>
    </Footer>
  );
};
