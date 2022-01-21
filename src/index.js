import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import Message from './message';
import configureStore from './configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <App />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/randomMessage" element={<Message msg="hi" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);