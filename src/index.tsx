import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '!style-loader!css-loader!./index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
