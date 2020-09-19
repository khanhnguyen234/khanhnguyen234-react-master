import { combineReducers, Reducer } from 'redux';
import DataSource from '../pwa/interfaces/data-source.interface';

const baseSuccess = (state, data) => {
  return {
    ...state,
    data,
  };
};

export const types = {
  BASE_ACTION: 'BASE_ACTION',
};

export const baseReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BASE_ACTION:
      return baseSuccess(state, action.data);
    default:
      return state;
  }
};

const installedReducers = new Set<string>();
const reducers: {
  [k: string]: Reducer;
} = {
  baseReducer,
};
const actions: {
  [reducer: string]: { [action: string]: Function };
} = {};

export function registerReducers(store, dataSources: DataSource[]) {
  let needToReplaceReducer = false;
  let reducerActions = {};
  dataSources.forEach((dataSource) => {
    if (installedReducers.has(dataSource.name)) {
      return;
    }
    needToReplaceReducer = true;
    installedReducers.add(dataSource.name);
    const actionTypeToHandlerMap = dataSource.handlers.reduce<{
      [x: string]: Reducer;
    }>((map, { handler, actions }) => {
      if (actions) {
        Object.assign(reducerActions, actions);
        if (typeof handler.type === 'string') {
          map[handler.type] = handler.handler;
        }
      }
      return map;
    }, {});

    const initState = dataSource.initState;

    reducers[dataSource.name] = (state = initState, action) => {
      const handler = actionTypeToHandlerMap[action.type];
      if (!handler) return state;
      return handler(state, action);
    };
    actions[dataSource.name] = reducerActions;
  });
  if (needToReplaceReducer) {
    store.replaceReducer(combineReducers(reducers));
  }
}
