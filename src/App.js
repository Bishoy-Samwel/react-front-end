import { React } from 'react';
import {
  Link,
} from 'react-router-dom';

export const App = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/randomMessage">Random Message</Link>
      </li>
    </ul>
  </nav>
);
