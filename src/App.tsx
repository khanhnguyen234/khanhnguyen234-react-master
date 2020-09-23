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
  console.log(cookie.get('Name'));

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push('/');
  };

  return (
    <div className={styles.App}>
      <Box marginBottom={10}>
        <Grid alignItem="center" container>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={goHome}
            style={{
              fontSize: '2rem',
              marginRight: '0.8rem',
            }}
          >
            Home
          </Button>
          <Title className={styles.title}>
            React + Typescript + Webpack + Workbox
          </Title>
        </Grid>
      </Box>

      {routeComponent}
    </div>
  );
};

export default App;
