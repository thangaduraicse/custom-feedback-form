import { Provider } from 'react-redux';
import { HashRouter }  from 'react-router-dom';
import { Devtools } from './utils';
import { createStore } from './redux';
import Pages from './pages';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    { process.env.NODE_ENV !== 'production' && <Devtools />}
    <HashRouter>
      <Pages />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
