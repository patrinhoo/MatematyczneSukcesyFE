import React from 'react';
import { Card, Row, Col } from 'antd';

import { Logo } from '../../../common/icons/Logo';
import { useUser } from '../../../api/hooks/useUser';

export const HeaderBox = () => {
  const { user } = useUser();

  return (
    <Card className='tw-text-left'>
      <div className='tw-text-2xl tw-font-semibold tw-mb-6'>
        Panel użytkownika
      </div>
      <div className='tw-flex tw-gap-2'>
        <div>
          <Logo />
        </div>
        <div className='tw-flex-1'>
          <Row>
            <Col xs={16}>
              <div className='tw-flex-1 tw-font-semibold tw-text-lg tw-mb-2'>
                Witaj {user?.given_name ?? ''}, miłej nauki!
              </div>
              <div className='tw-flex-1 tw-text-md tw-text-gray-dark'>
                Czy wiesz, że regularne nauka jest efektywniejsza o 50%?
              </div>
            </Col>
            <Col xs={4} className='tw-text-center'>
              <div className='tw-text-gray-dark tw-mb-2'>Twoje kursy</div>
              <div className='tw-text-2xl'>5</div>
            </Col>
            <Col xs={4} className='tw-text-center'>
              <div className='tw-text-gray-dark tw-mb-2'>Ocenione zadania</div>
              <div className='tw-text-2xl'>5/10</div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
};
