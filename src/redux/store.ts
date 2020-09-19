import {
  Reducer,
  Store,
  applyMiddleware,
  compose,
  createStore as createReduxStore,
} from 'redux';
import thunk from 'redux-thunk';
import { History } from 'history';
import ApplicationContext from '../pwa/interfaces/application-context';

interface StoreOptions {
  history: History;
  reducers: Reducer;
  getApplicationContext: () => ApplicationContext;
  initialState: Object;
  enableReduxDevTools: boolean;
}

function createStore(storeOptions: StoreOptions): Store {
  const composeEnhancers =
    storeOptions.enableReduxDevTools &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument(storeOptions.getApplicationContext),
    ),
  );

  const initialState = storeOptions.initialState;

  return createReduxStore(storeOptions.reducers, initialState, enhancer);
}

export default createStore;
