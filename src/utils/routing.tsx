import * as React from 'react';
import { matchPath } from '../pwa/helpers/matchPath';
import { History } from 'history';
import { parseQuery } from '../pwa/helpers/qs';
import ReactRouteContext from '../pwa/react-route-context';

function matchRoutes(
  pathname: string,
  routings: RoutingEntry[],
): {
  component?: React.ElementType;
  match: any | null;
} {
  let match: {} = null;
  let component: React.ElementType;
  routings.forEach((child) => {
    if (match === null) {
      match = matchPath(pathname, child.path);
      if (match !== null) {
        // component = child.module;
        component = child.component;
      }
    }
  });
  return {
    match,
    component,
  };
}

const computeRoutingChildren = (routing: RoutingEntry[], history: History) => {
  const matchResult = matchRoutes(history.location.pathname, routing);
  let Component: React.ElementType = 'div';
  let params = {};
  if (matchResult.match !== null) {
    Component = matchResult.component;
    params = matchResult.match.params;
  }

  return {
    Component,
    match: {
      params,
      pathname: history.location.pathname,
      search: history.location.search,
      state: history.location.state,
      hash: history.location.hash,
      getQuery: () => parseQuery(history.location.search),
    },
  };
};

interface RouterProps {
  routing: RoutingEntry[];
  history: History;
  childrenProps: any;
}

interface RoutingEntry {
  path: string;
  component: React.ElementType;
}

export function Router({ routing, history, childrenProps }: RouterProps) {
  const [matchedResult, setMatchedResult] = React.useState(() => {
    return computeRoutingChildren(routing, history);
  });
  const hasRouteChildren = routing.length > 0;
  React.useEffect(() => {
    if (hasRouteChildren) {
      return history.listen(() => {
        setMatchedResult(computeRoutingChildren(routing, history));
      });
    }
  }, []);

  return (
    <ReactRouteContext.Provider value={matchedResult.match}>
      <matchedResult.Component {...childrenProps} />
    </ReactRouteContext.Provider>
  );
}

export default Router