import React from 'react';
import Header from './header';
import Editor from './editor';
import Ast from './ast';
import Evaluater from './evaluated';
import Loading from './loading';
import * as style from './style.scss';

export const Playground: React.FC = () => {
  return (
    <>
      <Loading />
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.container}>
        <div className={style.editor}>
          <Editor />
        </div>
        <div className={style.ast}>
          <Ast />
        </div>
      </div>
      <Evaluater />
    </>
  );
};
