import React from 'react';
import { Card, Divider } from 'antd';

import { User } from '../../../common/icons/User';

export const TasksBox = () => {
  return (
    <Card title={<div className='tw-text-left'>Zadania</div>}>
      <div className='tw-flex tw-gap-8'>
        <div>
          <User height={40} width={40} />
        </div>
        <div className='tw-flex-1 tw-text-left'>
          <div className='tw-text-md tw-font-semibold'>Wielomiany</div>
          <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
            Do 2025-04-23 14:37
          </div>
        </div>
      </div>
      <Divider className='tw-my-4' />
      <div className='tw-flex tw-gap-8'>
        <div>
          <User height={40} width={40} />
        </div>
        <div className='tw-flex-1 tw-text-left'>
          <div className='tw-text-md tw-font-semibold'>Wielomiany</div>
          <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
            Do 2025-04-23 14:37
          </div>
        </div>
      </div>
      <Divider className='tw-my-4' />
      <div className='tw-flex tw-gap-8'>
        <div>
          <User height={40} width={40} />
        </div>
        <div className='tw-flex-1 tw-text-left'>
          <div className='tw-text-md tw-font-semibold'>Wielomiany</div>
          <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
            Do 2025-04-23 14:37
          </div>
        </div>
      </div>
      <Divider className='tw-my-4' />
    </Card>
  );
};
