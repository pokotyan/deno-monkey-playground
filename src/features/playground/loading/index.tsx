import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../slice';
import Loading from '../../../components/loading';
import * as style from './style.scss';

const Spinner: React.FC = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <div className={style.loadingBox}>
          <div className={style.boxInner}>
            <div className={style.boxBg}>
              <Loading />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Spinner;
