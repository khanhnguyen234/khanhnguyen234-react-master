import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }
// ReactDOM.render(<App/>, document.getElementById("root"))

import { createBrowserHistory, History } from 'history';
import ReactApplicationContext from './pwa/react-application-context';
import ReactHistoryContext from './pwa/react-history-context';
import ReactRouteContext from './pwa/react-route-context';
import createHistoryContext from './pwa/create-history-context';
import ProductListing from './modules/home';
import ProductDetail from './modules/product-detail';
import createStore from './redux/store';
import { registerReducers, baseReducer } from './redux/reducers';
import { Router } from './utils/routing';
import ProductListingData from './modules/home/dataSrc';

declare global {
  interface Window {
    [key: string]: any;
  }
}

const history = createBrowserHistory();
const historyContext = createHistoryContext(history);
const store: Store = createStore({
  history,
  getApplicationContext: () => applicationContext,
  reducers: combineReducers({ baseReducer }),
  initialState: window.__STATE__ || {},
  enableReduxDevTools: true,
});

const dataSources = [ProductListingData];
const regisReducers = registerReducers(store, dataSources);

const applicationContext = {
  registerReducers: regisReducers,
  store,
  history,
  historyContext,
};

const ROUTES = [
  {
    path: '/:name',
    component: ProductDetail,
  },
  {
    path: '/',
    component: ProductListing,
  },
];

ReactDOM.render(
  <BrowserRouter>
    <ReactApplicationContext.Provider value={applicationContext}>
      <ReactHistoryContext.Provider value={applicationContext.historyContext}>
        <Provider store={store}>
          <App
            routeComponent={
              <Router
                routing={ROUTES}
                history={applicationContext.history}
                childrenProps={{}}
              />
            }
          />
        </Provider>
      </ReactHistoryContext.Provider>
    </ReactApplicationContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
