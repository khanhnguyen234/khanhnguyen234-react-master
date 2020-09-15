import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
import { matchPath } from './pwa/helpers/matchPath';
import { parseQuery } from './pwa/helpers/qs';
import ProductListing from './modules/product-listing';
import ProductDetail from './modules/product-detail';

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

const computeRoutingChildren = (
  routing: RoutingEntry[],
  history: History,
) => {
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

function Router({ routing, history, childrenProps }: RouterProps) {
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

const history = createBrowserHistory();
const historyContext = createHistoryContext(history);
const applicationContext = {
  history,
  historyContext,
};

const ROUTES = [
  {
    path: '/detail',
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
      <ReactHistoryContext.Provider
        value={applicationContext.historyContext}
      >
        <App
          routeComponent={
            <Router
              routing={ROUTES}
              history={applicationContext.history}
              childrenProps={{}}
            />
          }
        />
      </ReactHistoryContext.Provider>
    </ReactApplicationContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
