import * as React from 'react';
import { Button } from '@material-ui/core';

import { scrollToOffset } from '@khanhnguyen234/react-common';
import {
  COOKIE_STORAGE,
  LOCAL_STORAGE,
} from '@khanhnguyen234/react-common/src/storages';
import { Grid, Title, Box } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';
import useStorage from '@khanhnguyen234/react-master/src/pwa/hooks/useStorage';

import * as styles from './styles.scss';

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
    <div className={styles.App}>
      <Box marginBottom={10}>
        <Grid alignItem="center" container spacing={4}>
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
      </Box>

      {routeComponent}
    </div>
  );
};

export default App;
