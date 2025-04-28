import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Spin, Card, Row, Col, Divider } from 'antd';
import { Logo } from '../../common/icons/Logo';
import { User } from '../../common/icons/User';

export const DashboardPage = () => {
  return (
    <div className='tw-p-4'>
      {/* <Spin indicator={<LoadingOutlined spin />} size='large' fullscreen /> */}
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
                  Witaj Tomek, miłej nauki!
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
                <div className='tw-text-gray-dark tw-mb-2'>
                  Ocenione zadania
                </div>
                <div className='tw-text-2xl'>5/10</div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>

      <Row className='tw-p-8' gutter={[20, 20]}>
        <Col xs={24} md={16}>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <Card
                title={
                  <div className='tw-flex tw-justify-between'>
                    <div className='tw-text-left'>Twoje kursy</div>
                    <div>
                      <Link
                        to={'/courses'}
                        className='tw-text-blue-medium tw-text-sm'
                      >
                        Szukaj kursów
                      </Link>
                    </div>
                  </div>
                }
              >
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <User height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Wielomiany
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  // style={{ width: '33%' }}
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <Logo height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Planimetria
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  // style={{ width: '33%' }}
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <User height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Funkcja kwadratowa
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  // style={{ width: '33%' }}
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <Logo height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Trygonometria
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  // style={{ width: '33%' }}
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <User height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Bryły
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
                <Card.Grid
                  className='hover:tw-bg-gray-lighter tw-cursor-pointer'
                  // style={{ width: '33%' }}
                  hoverable={false}
                >
                  <div className='tw-flex tw-gap-4 tw-items-center tw-mb-2'>
                    <Logo height={30} width={30} />
                    <div className='tw-flex-1 tw-text-left tw-font-semibold'>
                      Ciągi
                    </div>
                  </div>

                  <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce nec nibh tellus.
                  </div>
                  <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
                    Od 2025-03-13
                  </div>
                </Card.Grid>
              </Card>
            </Col>
            <Col xs={24}>
              <Card title={<div className='tw-text-left'>Aktywności</div>}>
                <div className='tw-flex tw-gap-8'>
                  <div>
                    <User height={40} width={40} />
                  </div>
                  <div className='tw-flex-1 tw-text-left'>
                    <div className='tw-text-md tw-font-semibold'>
                      Nauczyciel Patryk Rybacki sprawdził twoje zadanie!
                    </div>
                    <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
                      2025-04-23 14:37
                    </div>
                  </div>
                </div>
                <Divider className='tw-my-4' />
                <div className='tw-flex tw-gap-8'>
                  <div>
                    <User height={40} width={40} />
                  </div>
                  <div className='tw-flex-1 tw-text-left'>
                    <div className='tw-text-md tw-font-semibold'>
                      Nauczyciel Patryk Rybacki sprawdził twoje zadanie!
                    </div>
                    <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
                      2025-04-23 14:37
                    </div>
                  </div>
                </div>
                <Divider className='tw-my-4' />
                <div className='tw-flex tw-gap-8'>
                  <div>
                    <User height={40} width={40} />
                  </div>
                  <div className='tw-flex-1 tw-text-left'>
                    <div className='tw-text-md tw-font-semibold'>
                      Nauczyciel Patryk Rybacki sprawdził twoje zadanie!
                    </div>
                    <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
                      2025-04-23 14:37
                    </div>
                  </div>
                </div>
                <Divider className='tw-my-4' />
                <div className='tw-flex tw-gap-8'>
                  <div>
                    <User height={40} width={40} />
                  </div>
                  <div className='tw-flex-1 tw-text-left'>
                    <div className='tw-text-md tw-font-semibold'>
                      Nauczyciel Patryk Rybacki sprawdził twoje zadanie!
                    </div>
                    <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
                      2025-04-23 14:37
                    </div>
                  </div>
                </div>
                <Divider className='tw-my-4' />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={8}>
          <Row gutter={[20, 20]}>
            <Col xs={24}>
              <Card
                title={<div className='tw-text-left'>Szybki start</div>}
              ></Card>
            </Col>
            <Col xs={24}>
              <Card title={<div className='tw-text-left'>Zadania</div>}>
                <div className='tw-flex tw-gap-8'>
                  <div>
                    <User height={40} width={40} />
                  </div>
                  <div className='tw-flex-1 tw-text-left'>
                    <div className='tw-text-md tw-font-semibold'>
                      Wielomiany
                    </div>
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
                    <div className='tw-text-md tw-font-semibold'>
                      Wielomiany
                    </div>
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
                    <div className='tw-text-md tw-font-semibold'>
                      Wielomiany
                    </div>
                    <div className='tw-text-gray-mediumDark tw-text-sm tw-font-semibold'>
                      Do 2025-04-23 14:37
                    </div>
                  </div>
                </div>
                <Divider className='tw-my-4' />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
