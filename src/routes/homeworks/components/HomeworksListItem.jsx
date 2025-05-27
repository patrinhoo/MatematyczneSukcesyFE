import React from 'react';
import { Card, Avatar, Tooltip, Divider, Row, Col, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export const HomeworksListItem = ({ homework }) => {
  return (
    <Card className='tw-text-left tw-my-2' hoverable>
      <Row>
        <Col xs={12} className='tw-font-bold tw-text-lg'>
          {homework.title}
        </Col>
        {homework.submitted_at ? (
          <Col xs={12} className='tw-italic tw-text-end'>
            Oddano do oceny:{' '}
            {dayjs(homework.submitted_at).format('YYYY-MM-DD HH:mm')}
          </Col>
        ) : null}
      </Row>

      <Divider className='tw-my-4' />

      <div>{homework.description}</div>

      <div className='tw-flex tw-mt-4'>
        <div className='tw-pt-4'>
          <Button type='primary' icon={<EyeOutlined />}>
            Podgląd
          </Button>
        </div>

        <div
          xs={12}
          className='tw-w-fit tw-ml-auto tw-pt-4 tw-border-t tw-border-[rgba(0,0,0,0.06)]'
        >
          <Tooltip
            title={[
              'Autor:',
              homework.assigned_by.given_name,
              homework.assigned_by.last_name,
            ].join(' ')}
          >
            <Avatar src={homework.assigned_by.avatar} />
          </Tooltip>
          <span className='tw-ml-2 tw-italic'>
            Utworzono: {dayjs(homework.created_at).format('YYYY-MM-DD HH:mm')}
          </span>
        </div>
      </div>
    </Card>
  );
};
