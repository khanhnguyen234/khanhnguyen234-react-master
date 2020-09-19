import * as React from 'react';
import { Button } from '@material-ui/core';

import { scrollToOffset } from '@khanhnguyen234/react-common';
import { Grid, Title } from '@khanhnguyen234/react-components';
import useHistory from '@khanhnguyen234/react-master/src/pwa/hooks/useHistory';

import * as styles from './styles.scss';

const App = ({ routeComponent }) => {
  const history = useHistory();

  const goHome = () => {
    scrollToOffset({ top: 0 });
    history.push('/');
  };

  return (
    <div>
      <Grid alignItem="center" container className={styles.example}>
        <Button variant="contained" color="secondary" size="small" onClick={goHome}>
          Home
        </Button>
        <Title className={styles.title}>React + Typescript + Webpack + Workbox</Title>
      </Grid>
      {routeComponent}
    </div>
  );
};

export default App;
