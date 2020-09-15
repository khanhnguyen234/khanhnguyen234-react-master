import { createContext } from 'react';

export interface RouteContext<Q = Object, P = Object> {
  params: P;
  search: string;
  state: any;
  hash: string;
  pathname: string
  getQuery: () => any;
}

const ReactRouteContext = createContext<RouteContext>(undefined);

export default ReactRouteContext;
