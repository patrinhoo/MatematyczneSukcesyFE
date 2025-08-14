import React from 'react';
import { Card, Row, Col, Divider, Avatar, Tooltip, Button } from 'antd';
import { BlockMath } from 'react-katex';
import { UploadOutlined } from '@ant-design/icons';

import { getEducationLevelName } from '../../../utils/educationLevels';
import {
  getTaskDifficultyName,
  taskDifficultiesMap,
} from '../../../utils/taskDifficulties';
import classNames from 'classnames';
import { taskTypesMap } from '../../../utils/taskTypes';

export const HomeworkTask = ({ homeworkTask }) => {
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
          Dział: {homeworkTask.task.category.name}
        </Col>
        <Col xs={24} sm={12} lg={6} className='tw-mb-6'>
          Poziom: {getEducationLevelName(homeworkTask.task.education_level)}
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
                homeworkTask.task.difficulty === taskDifficultiesMap.EASY.value,
              'tw-text-yellow-medium':
                homeworkTask.task.difficulty ===
                taskDifficultiesMap.MEDIUM.value,
              'tw-text-red-medium':
                homeworkTask.task.difficulty === taskDifficultiesMap.HARD.value,
            })}
          >
            {getTaskDifficultyName(homeworkTask.task.difficulty)}
          </span>
        </Col>
      </Row>

      <Divider className='tw-mb-6 tw-mt-0' />

      <div className='tw-mb-4'>
        {[...homeworkTask.task.blocks]
          .sort((a, b) => a.order - b.order)
          .map((block) => (
            <div
              key={block.order}
              className={classNames({
                'tw-inline-block tw-mr-2': block.inline,
              })}
            >
              {renderBlock(block)}
            </div>
          ))}
      </div>

      {homeworkTask.task.type === taskTypesMap.CLOSED.value
        ? renderClosedAnswers(homeworkTask.task.closed_answers)
        : null}

      <div className='tw-flex tw-mt-4'>
        <div className='tw-pt-4'>
          <Button
            type='primary'
            icon={<UploadOutlined />}
            // onClick={previewHandler}
          >
            Prześlij rozwiązanie
          </Button>
        </div>

        <div className='tw-w-fit tw-ml-auto tw-pt-4 tw-border-t tw-border-[rgba(0,0,0,0.06)]'>
          <Tooltip
            title={[
              'Autor:',
              homeworkTask.task.created_by.given_name,
              homeworkTask.task.created_by.last_name,
            ].join(' ')}
          >
            <Avatar src={homeworkTask.task.created_by.avatar} />
          </Tooltip>
        </div>
      </div>
    </Card>
  );
};
