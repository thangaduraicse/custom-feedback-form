import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { HashRouter }  from 'react-router-dom';
import { Devtools } from './utils';
import { createStore } from './redux';
import Pages from './pages';

let App = Pages,
    development = process.env.NODE_ENV !== 'production';
const store = createStore();

if (development && module.hot) {
  App = hot(Pages);
}

ReactDOM.render(
  <Provider store={store}>
    { development && <Devtools />}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// import { hot } from 'react-hot-loader/root';
// const App = () => <div>Hello Wo!</div>;
// const ComponentY = hot(App);

// ReactDOM.render(<ComponentY />, document.getElementById('root'));