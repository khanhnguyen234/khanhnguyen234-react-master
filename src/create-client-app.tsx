import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import storages from '@khanhnguyen234/react-common/src/storages';
import { createBrowserHistory } from 'history';
import ReactApplicationContext from './pwa/react-application-context';
import ReactHistoryContext from './pwa/react-history-context';
import createHistoryContext from './pwa/create-history-context';
import createStore from './redux/store';
import { registerReducers, baseReducer } from './redux/reducers';
import { Router } from './utils/routing';

declare global {
  interface Window {
    [key: string]: any;
  }
}

interface CreateClientAppOptions {
  routes: any;
  reduxSources: any;
}

export default async function createClientApp(
  options?: CreateClientAppOptions,
) {
  const { routes, reduxSources } = options;
  const history = createBrowserHistory();
  const historyContext = createHistoryContext(history);
  const store: Store = createStore({
    history,
    getApplicationContext: () => applicationContext,
    reducers: combineReducers({ baseReducer }),
    initialState: window.__STATE__ || {},
    enableReduxDevTools: true,
  });

  const regisReducers = registerReducers(store, reduxSources);

  function getStorage(name: string) {
    return storages()[name];
  }

  const applicationContext = {
    registerReducers: regisReducers,
    store,
    getStorage,
    history,
    historyContext,
  };

  const render = window.__SSR__ ? ReactDOM.hydrate : ReactDOM.render;

  render(
    <BrowserRouter>
      <ReactApplicationContext.Provider value={applicationContext}>
        <ReactHistoryContext.Provider value={applicationContext.historyContext}>
          <Provider store={store}>
            <App
              routeComponent={
                <Router
                  routing={routes}
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
}
