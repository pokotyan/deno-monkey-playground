import * as React from 'react';
import { Playground } from './playground';
import * as style from './style.scss';

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <Playground />
    </div>
  );
};

export default App;
