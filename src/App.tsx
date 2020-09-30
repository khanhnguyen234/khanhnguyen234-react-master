import React from 'react';
import { Button } from '@material-ui/core';

import { scrollToOffset } from '@khanhnguyen234/react-common';
import {
  COOKIE_STORAGE,
  LOCAL_STORAGE,
} from '@khanhnguyen234/react-common/src/storages';
import { Grid, Title, Box } from '@khanhnguyen234/react-components';
import useHistory from './pwa/hooks/useHistory';
import useStorage from './pwa/hooks/useStorage';

import styles from './styles.scss';
// @ts-ignore
const StatelessModule = React.lazy(
  () => import('@khanhnguyen234/micro-react-admin/stateless-module'),
);
const MTitle = React.lazy(
  () => import('@khanhnguyen234/micro-react-components/Title'),
);

const Micro = () => {
  return (
    <>
      <React.Suspense fallback="Loading Micro Components">
        <MTitle>@khanhnguyen234/micro-react-components/Title</MTitle>
      </React.Suspense>
      <React.Suspense fallback="Loading Micro Admin">
        <StatelessModule />
      </React.Suspense>
    </>
  );
};

const App = ({ routeComponent }) => {
  const history = useHistory();
  const cookie = useStorage(COOKIE_STORAGE);
  console.log("cookie.get('Name')", cookie.get('Name'));

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push('/');
  };

  const goCreateProduct = () => {
    history.push('/admin/product/create');
  };

  return (
    <div className={styles.rootApp}>
      <Grid item container spacing={4}>
        <Grid item>
          <Grid item container alignItem="center" spacing={2}>
            <Grid item xs="auto">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={goHome}
              >
                Home
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={goCreateProduct}
              >
                Create
              </Button>
            </Grid>
            <Grid item xs={true}>
              <Title className={styles.title}>
                React + Typescript + Webpack + Workbox
              </Title>
            </Grid>
          </Grid>
        </Grid>
        <Grid item><Micro/></Grid>
        <Grid item>{routeComponent}</Grid>
      </Grid>
    </div>
  );
};

export default App;
