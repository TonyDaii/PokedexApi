import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App'

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);