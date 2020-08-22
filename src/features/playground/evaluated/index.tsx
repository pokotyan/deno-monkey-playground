import React from 'react';
import { useSelector } from 'react-redux';
import { selectEvaluated } from '../slice';
import * as style from './style.scss';

const Evaluated: React.FC = () => {
  const evaluated = useSelector(selectEvaluated);

  return <div className={style.container}>{evaluated}</div>;
};

export default Evaluated;
