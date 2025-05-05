import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import { Logo } from '../../../common/icons/Logo';
import { User } from '../../../common/icons/User';

export const CoursesBox = () => {
  return (
    <Card
      title={
        <div className='tw-flex tw-justify-between'>
          <div className='tw-text-left'>Twoje kursy</div>
          <div>
            <Link to={'/courses'} className='tw-text-blue-medium tw-text-sm'>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
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
          <div className='tw-flex-1 tw-text-left tw-font-semibold'>Bryły</div>
        </div>

        <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
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
          <div className='tw-flex-1 tw-text-left tw-font-semibold'>Ciągi</div>
        </div>

        <div className='tw-text-justify tw-text-gray-mediumDark tw-text-xs tw-mb-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          nibh tellus.
        </div>
        <div className='tw-text-gray-mediumDark tw-text-right tw-text-xs'>
          Od 2025-03-13
        </div>
      </Card.Grid>
    </Card>
  );
};
