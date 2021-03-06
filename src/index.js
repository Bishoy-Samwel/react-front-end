import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { App } from './App';

const store = configureStore();

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
);
