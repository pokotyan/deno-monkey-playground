import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCode, selectIsTreeView, run, togglePreviewMode } from '../slice';
import * as style from './style.scss';

const Header: React.FC = () => {
  const code = useSelector(selectCode);
  const isTreeView = useSelector(selectIsTreeView);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.item}>monkey playground</div>
      <div
        className={`${style.item} ${style.button}`}
        onClick={() => dispatch(run(code))}
      >
        実行
      </div>
      <div>
        <input
          type="radio"
          name="radio"
          className={style.radioInput}
          id="viewMode"
          checked={isTreeView}
          onClick={() => dispatch(togglePreviewMode())}
        />
        <label htmlFor="viewMode">ツリー表示</label>
      </div>
    </div>
  );
};

export default Header;
