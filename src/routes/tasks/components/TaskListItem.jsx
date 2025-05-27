import React from 'react';
import { Card, Row, Col, Divider, Avatar, Tooltip } from 'antd';
import { BlockMath } from 'react-katex';

import { getEducationLevelName } from '../../../utils/educationLevels';
import {
  getTaskDifficultyName,
  taskDifficultiesMap,
} from '../../../utils/taskDifficulties';
import classNames from 'classnames';
import { taskTypesMap } from '../../../utils/taskTypes';

export const TaskListItem = ({ task }) => {
  const renderBlock = (block) => {
    switch (block.type) {
      case 'TEXT':
        return <p className='tw-mb-2'>{block.content}</p>;
      case 'LATEX':
        return (
          <div className='tw-mb-2'>
            <BlockMath math={block.content} />
          </div>
        );
      case 'IMAGE':
        return (
          <div className='tw-mb-2'>
            <img src={block.image} alt='Task Block' className='tw-m-auto' />
          </div>
        );
      default:
        return null;
    }
  };

  const renderClosedAnswers = (answers) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return (
      <Row className='tw-mt-4'>
        {answers
          .sort((a, b) => a.order - b.order)
          .map((answer, index) => (
            <Col key={answer.id} xs={24} md={12} lg={8} xl={6}>
              <span className='tw-font-bold tw-mr-2'>{letters[index]}.</span>
              {answer.type === 'TEXT' && answer.content}
              {answer.type === 'IMAGE' && (
                <img
                  src={answer.image}
                  alt={`Answer ${letters[index]}`}
                  className='tw-max-h-20 tw-object-contain'
                />
              )}
            </Col>
          ))}
      </Row>
    );
  };

  return (
    <Card className='tw-text-left tw-my-2' hoverable>
      <Row>
        <Col xs={24} lg={12} className='tw-font-semibold tw-mb-6'>
          Dział: {task.category.name}
        </Col>
        <Col xs={24} sm={12} lg={6} className='tw-mb-6'>
          Poziom: {getEducationLevelName(task.education_level)}
        </Col>
        <Col
          xs={24}
          sm={12}
          lg={6}
          className={classNames('tw-text-end tw-mb-6')}
        >
          Trudność:{' '}
          <span
            className={classNames('tw-uppercase tw-font-bold', {
              'tw-text-green-medium':
                task.difficulty === taskDifficultiesMap.EASY.value,
              'tw-text-yellow-medium':
                task.difficulty === taskDifficultiesMap.MEDIUM.value,
              'tw-text-red-medium':
                task.difficulty === taskDifficultiesMap.HARD.value,
            })}
          >
            {getTaskDifficultyName(task.difficulty)}
          </span>
        </Col>
      </Row>

      <Divider className='tw-mb-6 tw-mt-0' />

      {[...task.blocks]
        .sort((a, b) => a.order - b.order)
        .map((block) => (
          <div key={block.order} className='tw-mb-4'>
            {renderBlock(block)}
          </div>
        ))}

      {task.type === taskTypesMap.CLOSED.value
        ? renderClosedAnswers(task.closed_answers)
        : null}

      <div className='tw-flex tw-justify-end tw-mt-4'>
        <Tooltip
          title={[
            'Autor:',
            task.created_by.given_name,
            task.created_by.last_name,
          ].join(' ')}
        >
          <Avatar src={task.created_by.avatar} />
        </Tooltip>
      </div>
    </Card>
  );
};
